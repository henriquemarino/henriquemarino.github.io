import type { Metadata } from 'next'
import { BlogSearch } from '@/components/blog/BlogSearch'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { getAllPosts, getAllTags } from '@/lib/content/collections'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artigos técnicos sobre backend, Java, Node.js, Redis, PostgreSQL, microsserviços e arquitetura.',
  alternates: {
    canonical: absoluteUrl('/blog'),
    types: {
      'application/rss+xml': absoluteUrl('/rss.xml'),
    },
  },
}

export default function BlogPage() {
  const posts = getAllPosts().map((post) => ({
    type: post.type,
    slug: post.slug,
    title: post.title,
    description: post.description,
    excerpt: post.excerpt,
    date: post.date,
    updated: post.updated,
    tags: post.tags,
    published: post.published,
    featured: post.featured,
    readingTime: post.readingTime,
  }))
  const tags = getAllTags()

  return (
    <section className="bg-primary px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <Breadcrumbs items={[{ label: 'Blog' }]} />
        <header className="mb-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-highlight">blog/</p>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Artigos técnicos</h1>
          <p className="max-w-3xl text-text-light">
            Busca local, tags, MDX, syntax highlighting, Mermaid, tabelas e componentes React prontos para posts de engenharia.
          </p>
        </header>

        <BlogSearch posts={posts} tags={tags} />
      </div>
    </section>
  )
}
