'use client'

import { useEffect, useId, useRef, useState } from 'react'

// NOTE (for future maintainers / AI agents):
// This renders Mermaid diagrams on the client, lazily — the (heavy) `mermaid`
// dependency is only fetched/executed when the diagram nears the viewport
// (see the IntersectionObserver below). Diagrams are authored as ```mermaid
// fenced blocks and turned into <Mermaid chart="..."> by the `remarkMermaid`
// plugin in lib/content/mdx.tsx.
//
// ALTERNATIVE — build-time pre-render to static SVG (NOT used here, on purpose):
//   Render each diagram to SVG at build (e.g. in scripts/generate-static-assets
//   or a rehype step) using @mermaid-js/mermaid-cli / mermaid + a headless
//   browser, then inline the SVG. This ships ZERO mermaid JS to the client and
//   removes runtime render errors.
//   Trade-off / why it was skipped: mermaid needs a DOM, so build-time rendering
//   requires Puppeteer/Playwright (downloads Chromium) — a heavy, flaky build
//   dependency in CI (a failed Chromium download breaks the deploy). For the few
//   diagrams here, lazy client-side rendering is the better cost/benefit.
//   Revisit the pre-render approach if diagram count grows a lot or if the
//   client mermaid bundle becomes a measurable performance problem.
export function MermaidDiagram({ chart }: { chart: string }) {
  const id = useId().replace(/:/g, '')
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  // Falls back to eager rendering where IntersectionObserver is unavailable.
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')
  const [error, setError] = useState<string | null>(null)

  // Defer everything until the diagram is near the viewport, so mermaid (a
  // large dependency) is only fetched and executed when it's actually needed.
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

    async function render() {
      try {
        const mermaid = (await import('mermaid')).default
        mermaid.initialize({
          startOnLoad: false,
          theme: document.documentElement.classList.contains('dark') ? 'dark' : 'neutral',
          securityLevel: 'strict',
        })

        const result = await mermaid.render(`mermaid-${id}`, chart)
        if (mounted && containerRef.current) {
          containerRef.current.innerHTML = result.svg
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Erro ao renderizar diagrama Mermaid.')
        }
      }
    }

    render()

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
