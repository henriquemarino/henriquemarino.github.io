'use client'

import { MonitorCog, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const Icon = theme === 'dark' ? Moon : Sun

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-secondary/50 bg-light text-text-light transition-colors hover:bg-secondary hover:text-text"
      aria-label={theme === 'dark' ? 'Ativar light mode' : 'Ativar dark mode'}
      title={theme === 'dark' ? 'Dark mode ativo' : 'Light mode ativo'}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      <MonitorCog className="sr-only" />
    </button>
  )
}
