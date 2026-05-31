import { CalendarDays, Clock3 } from 'lucide-react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { formatDate } from '@/lib/site'

export function ContentHeader({
  type,
  title,
  description,
  date,
  readingTime,
  tags,
}: {
  type: 'Blog' | 'Projects'
  title: string
  description: string
  date: string
  readingTime: string
  tags: string[]
}) {
  const parentHref = type === 'Blog' ? '/blog' : '/projects'

  return (
    <header className="mb-10">
      <Breadcrumbs items={[{ label: type, href: parentHref }, { label: title }]} />
      <div className="mb-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text-light">
            {tag}
          </span>
        ))}
      </div>
      <h1 className="mb-5 max-w-4xl text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">{title}</h1>
      <p className="mb-6 max-w-3xl text-lg leading-relaxed text-text-light">{description}</p>
      <div className="flex flex-wrap items-center gap-4 text-sm text-text-light">
        <span className="inline-flex items-center gap-2">
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          {formatDate(date)}
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock3 className="h-4 w-4" aria-hidden="true" />
          {readingTime}
        </span>
      </div>
    </header>
  )
}
