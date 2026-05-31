import Link from 'next/link'
import { ArrowUpRight, CalendarDays, Clock3 } from 'lucide-react'
import type { BlogPost } from '@/lib/content/types'
import { formatDate } from '@/lib/site'

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group rounded-lg border border-secondary/30 bg-light/70 p-5 transition-colors hover:border-highlight/50">
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-text-light">
        <span className="inline-flex items-center gap-1">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          {formatDate(post.date)}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
          {post.readingTime}
        </span>
      </div>

      <h3 className="mb-3 text-xl font-semibold text-text">
        <Link href={`/blog/${post.slug}`} className="inline-flex items-start gap-2 hover:text-highlight">
          {post.title}
          <ArrowUpRight className="mt-1 h-4 w-4 flex-shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-text-light">{post.excerpt ?? post.description}</p>

      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-secondary/40 px-2.5 py-1 text-xs text-text-light">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
