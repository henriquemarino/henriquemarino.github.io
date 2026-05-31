import Link from 'next/link'
import { Code2, Mail, Network } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-secondary/20 bg-dark py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-text-light sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Henrique Marino.</p>
        <div className="flex items-center gap-3">
          <Link href={siteConfig.github} target="_blank" className="rounded-md border border-secondary/30 p-2 hover:text-highlight" aria-label="GitHub">
            <Code2 className="h-4 w-4" />
          </Link>
          <Link href={siteConfig.linkedin} target="_blank" className="rounded-md border border-secondary/30 p-2 hover:text-highlight" aria-label="LinkedIn">
            <Network className="h-4 w-4" />
          </Link>
          <Link href={`mailto:${siteConfig.email}`} className="rounded-md border border-secondary/30 p-2 hover:text-highlight" aria-label="Email">
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
