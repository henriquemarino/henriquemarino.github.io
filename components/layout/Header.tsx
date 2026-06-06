'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/lib/data/navigation'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()
  const currentPath = pathname ?? '/'
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-secondary/20 bg-dark/90 py-4 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-mono text-xl font-bold text-text" onClick={() => setIsOpen(false)}>
          HenriqueMarino<span className="text-highlight">.github.io</span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => {
              const isActive = item.href === '/' ? currentPath === '/' : currentPath.startsWith(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className="nav-link text-sm text-text-light transition-colors hover:text-text"
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <ThemeToggle />

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-secondary/50 text-text-light md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'fixed inset-x-0 top-[69px] z-40 border-b border-secondary/20 bg-dark/95 px-4 py-6 backdrop-blur md:hidden',
          isOpen ? 'block' : 'hidden',
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-md border border-secondary/20 bg-light/40 px-4 py-3 text-text-light"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-4 w-4 text-highlight" aria-hidden="true" />
              <span>{item.label}</span>
              <code className="ml-auto text-xs text-text-light">{item.terminal}</code>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
