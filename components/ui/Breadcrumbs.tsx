import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

type BreadcrumbItem = {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-text-light">
      <Link href="/" className="inline-flex items-center gap-1 hover:text-highlight">
        <Home className="h-3.5 w-3.5" aria-hidden="true" />
        Home
      </Link>
      {items.map((item) => (
        <span key={`${item.label}-${item.href ?? 'current'}`} className="inline-flex items-center gap-2">
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          {item.href ? (
            <Link href={item.href} className="hover:text-highlight">
              {item.label}
            </Link>
          ) : (
            <span className="text-text">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
