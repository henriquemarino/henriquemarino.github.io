import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ContentHeader } from '@/components/content/ContentHeader'
import { PrevNextNav } from '@/components/content/PrevNextNav'
import { getAllPosts, getPostBySlug } from '@/lib/content/collections'
import { renderMdx } from '@/lib/content/mdx'
import { absoluteUrl, siteConfig } from '@/lib/site'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: absoluteUrl(`/blog/${post.slug}`),
    },
    openGraph: {
      type: 'article',
      url: absoluteUrl(`/blog/${post.slug}`),
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [siteConfig.name],
      tags: post.tags,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const posts = getAllPosts()
  const currentIndex = posts.findIndex((item) => item.slug === post.slug)
  const previous = posts[currentIndex + 1]
  const next = posts[currentIndex - 1]
  const content = await renderMdx(post.body)

  return (
    <article className="bg-primary px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <ContentHeader
          type="Blog"
          title={post.title}
          description={post.description}
          date={post.date}
          readingTime={post.readingTime}
          tags={post.tags}
        />
        <div className="prose-portfolio">{content}</div>
        <PrevNextNav
          previous={previous ? { title: previous.title, href: `/blog/${previous.slug}` } : undefined}
          next={next ? { title: next.title, href: `/blog/${next.slug}` } : undefined}
        />
      </div>
    </article>
  )
}
