'use client'

import { useEffect, useId, useRef, useState } from 'react'

// NOTE (for future maintainers / AI agents):
// Mermaid diagrams are rendered on the client, lazily and one-at-a-time. They
// are authored as ```mermaid fenced blocks and turned into <Mermaid chart="...">
// by the `remarkMermaid` plugin in lib/content/mdx.tsx.
//
// This is built to scale to many diagrams (per page and across the project):
//   1. `mermaid` is imported and the import is shared, so it is fetched once per
//      session regardless of how many diagrams exist (module-level singleton).
//   2. Renders are serialized through a shared queue. mermaid keeps global/
//      shared state internally and is not safe to call concurrently; the queue
//      also avoids a main-thread burst when several diagrams are visible at once.
//   3. Each diagram only renders when it nears the viewport (IntersectionObserver),
//      so off-screen diagrams cost nothing until scrolled to.
//
// ALTERNATIVE — build-time pre-render to static SVG (NOT used here, on purpose):
//   Render each diagram to SVG at build (e.g. in scripts/generate-static-assets
//   or a rehype step) using @mermaid-js/mermaid-cli / mermaid + a headless
//   browser, then inline the SVG. This ships ZERO mermaid JS to the client and
//   removes runtime render errors.
//   Trade-off / why it was skipped: mermaid needs a DOM, so build-time rendering
//   requires Puppeteer/Playwright (downloads Chromium) — a heavy, flaky build
//   dependency in CI (a failed Chromium download breaks the deploy). The runtime
//   setup above is enough for normal diagram counts; revisit pre-render only if
//   you have very many heavy diagrams or the mermaid bundle becomes a measurable
//   performance problem.

type MermaidApi = Awaited<typeof import('mermaid')>['default']

// (1) Load mermaid once and share the promise across all diagram instances.
let mermaidPromise: Promise<MermaidApi> | null = null
function loadMermaid(): Promise<MermaidApi> {
  mermaidPromise ??= import('mermaid').then((mod) => mod.default)
  return mermaidPromise
}

// (2) Serialize renders: chain each task after the previous one, regardless of
// whether the previous succeeded or failed, so renders never overlap.
let renderChain: Promise<unknown> = Promise.resolve()
function queueRender<T>(task: () => Promise<T>): Promise<T> {
  const result = renderChain.then(task, task)
  renderChain = result.then(
    () => undefined,
    () => undefined,
  )
  return result
}

export function MermaidDiagram({ chart }: { chart: string }) {
  const id = useId().replace(/:/g, '')
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  // Falls back to eager rendering where IntersectionObserver is unavailable.
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')
  const [error, setError] = useState<string | null>(null)

  // (3) Defer everything until the diagram is near the viewport.
  useEffect(() => {
    const element = wrapperRef.current
    if (!element || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible || !chart) return

    let mounted = true

    queueRender(async () => {
      const mermaid = await loadMermaid()
      if (!mounted) return

      // initialize is cheap and lets each render pick up the current theme; it
      // is safe here because the queue guarantees no concurrent init/render.
      mermaid.initialize({
        startOnLoad: false,
        theme: document.documentElement.classList.contains('dark') ? 'dark' : 'neutral',
        securityLevel: 'strict',
      })

      const result = await mermaid.render(`mermaid-${id}`, chart)
      if (mounted && containerRef.current) {
        containerRef.current.innerHTML = result.svg
      }
    }).catch((err) => {
      if (mounted) {
        setError(err instanceof Error ? err.message : 'Erro ao renderizar diagrama Mermaid.')
      }
    })

    return () => {
      mounted = false
    }
  }, [visible, chart, id])

  return (
    <div ref={wrapperRef} className="not-prose my-6 overflow-x-auto rounded-lg border border-border bg-light/70 p-4">
      {error ? <pre className="text-sm text-text-light">{error}</pre> : <div ref={containerRef} />}
    </div>
  )
}
