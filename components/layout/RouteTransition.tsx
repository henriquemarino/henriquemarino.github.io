'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const VISIBLE_MS = 700

export function RouteTransition() {
  const pathname = usePathname() ?? '/'
  const [state, setState] = useState({ visible: false, path: '/' })
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    setState({ visible: true, path: pathname })
    const timeout = setTimeout(() => setState((current) => ({ ...current, visible: false })), VISIBLE_MS)

    return () => clearTimeout(timeout)
  }, [pathname])

  const label = state.path === '/' ? '~' : state.path

  return (
    <div className={`route-toast${state.visible ? ' is-visible' : ''}`} role="status" aria-hidden={!state.visible}>
      <div className="flex items-center gap-1.5 rounded-md border border-secondary/40 bg-dark/95 px-3 py-2 font-mono text-xs text-text shadow-panel backdrop-blur">
        <span className="font-bold text-highlight">{'>'}</span>
        <span>cd {label}</span>
        <span className="typing-cursor route-toast-cursor" aria-hidden="true" />
      </div>
    </div>
  )
}
