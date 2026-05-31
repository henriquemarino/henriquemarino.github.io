import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PostCard } from '@/components/content/PostCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { BlogPost } from '@/lib/content/types'

export function BlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="blog" className="bg-primary px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="blog/"
          title="Artigos técnicos"
          description="Onde escrevo sobre backend, arquitetura e decisões técnicas do dia a dia."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 rounded-md border border-secondary px-5 py-3 text-sm font-semibold hover:bg-secondary">
            Ver todos os artigos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
