'use client'

import { useEffect, useId, useRef, useState } from 'react'

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
