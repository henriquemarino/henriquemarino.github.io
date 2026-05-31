'use client'

import { useMemo, useState } from 'react'
import { Search, Tag } from 'lucide-react'
import { PostCard } from '@/components/content/PostCard'
import type { BlogPost } from '@/lib/content/types'
import { cn } from '@/lib/utils'

export function BlogSearch({ posts, tags }: { posts: BlogPost[]; tags: string[] }) {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return posts.filter((post) => {
      const matchesTag = activeTag ? post.tags.includes(activeTag) : true
      const haystack = `${post.title} ${post.description} ${post.tags.join(' ')}`.toLowerCase()
      const matchesQuery = normalizedQuery ? haystack.includes(normalizedQuery) : true

      return matchesTag && matchesQuery
    })
  }, [activeTag, posts, query])

  return (
    <div>
      <div className="mb-6 grid gap-4 rounded-lg border border-secondary/30 bg-light/60 p-4 md:grid-cols-[1fr_auto] md:items-center">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-light" aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por Redis, Java, arquitetura..."
            className="w-full rounded-md border border-secondary/30 bg-code-bg py-3 pl-10 pr-4 text-sm text-text outline-none focus:border-highlight"
          />
        </label>
        <div className="font-mono text-xs text-text-light">{filteredPosts.length} resultado(s)</div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          className={cn(
            'inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs transition-colors',
            activeTag === null ? 'border-highlight bg-secondary text-text' : 'border-secondary/40 text-text-light hover:text-text',
          )}
        >
          <Tag className="h-3.5 w-3.5" />
          Todas
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={cn(
              'rounded-full border px-3 py-1.5 text-xs transition-colors',
              activeTag === tag ? 'border-highlight bg-secondary text-text' : 'border-secondary/40 text-text-light hover:text-text',
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
