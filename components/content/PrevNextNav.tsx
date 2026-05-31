import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type Item = {
  title: string
  href: string
}

export function PrevNextNav({ previous, next }: { previous?: Item; next?: Item }) {
  if (!previous && !next) return null

  return (
    <nav className="mt-12 grid gap-4 border-t border-secondary/20 pt-8 md:grid-cols-2" aria-label="Navegação entre conteúdos">
      {previous ? (
        <Link href={previous.href} className="rounded-lg border border-secondary/30 bg-light/60 p-4 hover:border-highlight/50">
          <span className="mb-2 inline-flex items-center gap-2 text-sm text-text-light">
            <ArrowLeft className="h-4 w-4" /> Anterior
          </span>
          <p className="font-semibold text-text">{previous.title}</p>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className="rounded-lg border border-secondary/30 bg-light/60 p-4 text-right hover:border-highlight/50">
          <span className="mb-2 inline-flex items-center justify-end gap-2 text-sm text-text-light">
            Próximo <ArrowRight className="h-4 w-4" />
          </span>
          <p className="font-semibold text-text">{next.title}</p>
        </Link>
      ) : null}
    </nav>
  )
}
