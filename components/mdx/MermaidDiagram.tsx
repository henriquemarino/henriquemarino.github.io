'use client'

import { useEffect, useId, useRef, useState } from 'react'

export function MermaidDiagram({ chart }: { chart: string }) {
  const id = useId().replace(/:/g, '')
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
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
  }, [chart, id])

  return (
    <div className="not-prose my-6 overflow-x-auto rounded-lg border border-border bg-light/70 p-4">
      {error ? <pre className="text-sm text-text-light">{error}</pre> : <div ref={containerRef} />}
    </div>
  )
}
