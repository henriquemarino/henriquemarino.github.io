'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ZoomIn, ZoomOut, RotateCcw, X, Maximize2 } from 'lucide-react'
import { useTheme } from '@/components/theme/ThemeProvider'

type MermaidApi = Awaited<typeof import('mermaid')>['default']

// Load mermaid once and share the promise across all diagram instances.
let mermaidPromise: Promise<MermaidApi> | null = null
function loadMermaid(): Promise<MermaidApi> {
  mermaidPromise ??= import('mermaid').then((mod) => mod.default)
  return mermaidPromise
}

// Serialize renders: chain each task after the previous one, regardless of
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
  const { theme } = useTheme()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const drawingAreaRef = useRef<HTMLDivElement>(null)
  
  // Falls back to eager rendering where IntersectionObserver is unavailable.
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')
  const [error, setError] = useState<string | null>(null)
  
  // Lightbox / Zoom states
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [svgHtml, setSvgHtml] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  // Defer rendering until the diagram is near the viewport.
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
        theme: theme === 'dark' ? 'dark' : 'neutral',
        securityLevel: 'strict',
      })

      const result = await mermaid.render(`mermaid-${id}`, chart)
      if (mounted && containerRef.current) {
        containerRef.current.innerHTML = result.svg
        setSvgHtml(result.svg)
      }
    }).catch((err) => {
      if (mounted) {
        setError(err instanceof Error ? err.message : 'Erro ao renderizar diagrama Mermaid.')
      }
    })

    return () => {
      mounted = false
    }
  }, [visible, chart, id, theme])

  // Prevent background body scroll when lightbox is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  // Listen for Escape key to close modal
  useEffect(() => {
    if (!isModalOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  // Advanced mouse wheel zoom inside the drawing area (with passive: false to prevent body scrolling)
  useEffect(() => {
    const area = drawingAreaRef.current
    if (!area || !isModalOpen) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      // Scale zoom sensitivity depending on current scale (finer tuning when zoom is low)
      const zoomFactor = Math.max(0.02, Math.min(zoom * 0.08, 0.15))
      const direction = e.deltaY < 0 ? 1 : -1
      
      setZoom((prev) => {
        const nextZoom = prev + direction * zoomFactor
        return Math.max(0.4, Math.min(nextZoom, 4))
      })
    }

    area.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      area.removeEventListener('wheel', handleWheel)
    }
  }, [isModalOpen, zoom])

  const openModal = () => {
    if (containerRef.current) {
      setSvgHtml(containerRef.current.innerHTML)
      setZoom(1)
      setPan({ x: 0, y: 0 })
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true)
      const touch = e.touches[0]
      setDragStart({ x: touch.clientX - pan.x, y: touch.clientY - pan.y })
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const touch = e.touches[0]
    setPan({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y
    })
  }

  const handleDoubleClick = () => {
    if (zoom !== 1) {
      resetZoom()
    } else {
      setZoom(2.5)
    }
  }

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 6))
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.4))
  const resetZoom = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  return (
    <div ref={wrapperRef} className="not-prose relative group my-6 overflow-hidden rounded-lg border border-border bg-light/70 p-4">
      {/* Zoom / Maximize button */}
      {!error && visible && svgHtml && (
        <button
          onClick={openModal}
          className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border bg-background/80 hover:bg-background text-xs font-medium text-text-light hover:text-text opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 shadow-sm"
          title="Ver em tela cheia com zoom"
          aria-label="Ver em tela cheia com zoom"
        >
          <Maximize2 className="h-3.5 w-3.5" />
          <span>Zoom</span>
        </button>
      )}

      {error ? (
        <pre className="text-sm text-text-light">{error}</pre>
      ) : (
        <div className="overflow-x-auto">
          <div ref={containerRef} />
        </div>
      )}

      {/* Lightbox / Modal */}
      {isModalOpen && mounted && typeof window !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] flex flex-col bg-background/95 backdrop-blur-md select-none animate-in fade-in duration-200">
          {/* Top panel/Controls */}
          <div className="flex items-center justify-between border-b border-border px-6 py-4 bg-background/50">
            <h3 className="text-sm font-semibold text-text">Visualizador de Diagrama</h3>
            
            <div className="flex items-center gap-4">
              {/* Zoom Controls with Slider */}
              <div className="flex items-center gap-2">
                <button
                  onClick={zoomOut}
                  className="p-1.5 hover:bg-light border border-border rounded-md text-text-light hover:text-text transition-colors"
                  title="Diminuir zoom"
                  disabled={zoom <= 0.4}
                >
                  <ZoomOut className="h-3.5 w-3.5" />
                </button>
                
                <input
                  type="range"
                  min="0.4"
                  max="6"
                  step="0.05"
                  value={zoom}
                  onChange={(e) => setZoom(parseFloat(e.target.value))}
                  className="w-24 h-1 bg-border rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
                  title="Ajustar nível de zoom"
                />

                <button
                  onClick={zoomIn}
                  className="p-1.5 hover:bg-light border border-border rounded-md text-text-light hover:text-text transition-colors"
                  title="Aumentar zoom"
                  disabled={zoom >= 6}
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                </button>
                
                <span className="text-xs font-mono px-2 text-text-light w-12 text-right">
                  {Math.round(zoom * 100)}%
                </span>
              </div>

              {/* Reset */}
              <button
                onClick={resetZoom}
                className="p-2 hover:bg-light border border-border rounded-md text-text-light hover:text-text transition-colors"
                title="Centralizar e resetar zoom"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
              
              <div className="h-6 w-px bg-border" />

              {/* Close */}
              <button
                onClick={closeModal}
                className="p-2 hover:bg-destructive/10 hover:text-destructive border border-border hover:border-destructive/20 rounded-md text-text-light transition-colors"
                title="Fechar (Esc)"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive drawing area */}
          <div
            ref={drawingAreaRef}
            className="flex-1 w-full h-full overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing bg-light/30 relative"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            onDoubleClick={handleDoubleClick}
            title="Dica: duplo clique para alternar zoom rápido"
          >
            <style dangerouslySetInnerHTML={{ __html: `
              .mermaid-zoom-container svg {
                width: 100% !important;
                height: auto !important;
                max-width: 100% !important;
              }
            `}} />
            <div
              className="mermaid-zoom-container p-12 transition-transform duration-100 ease-out select-none flex items-center justify-center"
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transformOrigin: 'center center',
                width: '100%',
                maxWidth: '1200px',
              }}
              dangerouslySetInnerHTML={{ __html: svgHtml }}
            />
          </div>

          {/* Bottom helper text */}
          <div className="px-6 py-2.5 border-t border-border bg-background/50 text-center flex justify-between items-center">
            <span className="text-[10px] text-text-light italic">
              Use a roda do mouse para zoom rápido • Dê duplo clique para alternar zoom • Arraste para mover
            </span>
            <span className="text-[10px] text-text-light font-mono">
              Resoluções grandes
            </span>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
