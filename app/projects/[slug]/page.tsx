import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Code2, Construction, ExternalLink } from 'lucide-react'
import { ContentHeader } from '@/components/content/ContentHeader'
import { PrevNextNav } from '@/components/content/PrevNextNav'
import { getAllProjects, getProjectBySlug } from '@/lib/content/collections'
import { renderMdx } from '@/lib/content/mdx'
import { absoluteUrl, siteConfig } from '@/lib/site'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: absoluteUrl(`/projects/${project.slug}`),
    },
    openGraph: {
      type: 'article',
      url: absoluteUrl(`/projects/${project.slug}`),
      title: project.title,
      description: project.description,
      publishedTime: project.date,
      modifiedTime: project.updated ?? project.date,
      authors: [siteConfig.name],
      tags: project.tags,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const projects = getAllProjects()
  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const previous = projects[currentIndex + 1]
  const next = projects[currentIndex - 1]
  const content = await renderMdx(project.body)

  return (
    <article className="bg-primary px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <ContentHeader
          type="Projects"
          title={project.title}
          description={project.description}
          date={project.date}
          readingTime={project.readingTime}
          tags={project.tags}
        />

        <div
          role="status"
          className="mb-8 flex items-start gap-3 rounded-lg border border-yellow-500/40 bg-light/70 p-4 text-sm"
        >
          <Construction className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" aria-hidden="true" />
          <div>
            <p className="mb-1 font-semibold text-text">Projeto em desenvolvimento</p>
            <p className="text-text-light">
              Este estudo de caso ainda está sendo finalizado. O conteúdo é preliminar e deve mudar conforme o projeto evoluir.
            </p>
          </div>
        </div>

        <div className="mb-8 grid gap-4 rounded-lg border border-secondary/30 bg-light/60 p-4 sm:grid-cols-3">
          <div>
            <p className="mb-1 font-mono text-xs uppercase text-highlight">Status</p>
            <p className="text-sm text-text-light">{project.status}</p>
          </div>
          <div>
            <p className="mb-1 font-mono text-xs uppercase text-highlight">Papel</p>
            <p className="text-sm text-text-light">{project.role}</p>
          </div>
          <div>
            <p className="mb-1 font-mono text-xs uppercase text-highlight">Stack</p>
            <p className="text-sm text-text-light">{project.stack.join(', ')}</p>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {project.repo ? (
            <Link href={project.repo} target="_blank" className="inline-flex items-center gap-2 rounded-md border border-secondary px-4 py-2 text-sm font-semibold hover:bg-secondary">
              <Code2 className="h-4 w-4" aria-hidden="true" />
              Repositório
            </Link>
          ) : null}
          {project.demo ? (
            <Link href={project.demo} target="_blank" className="inline-flex items-center gap-2 rounded-md border border-secondary px-4 py-2 text-sm font-semibold hover:bg-secondary">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Demo
            </Link>
          ) : null}
        </div>

        <div className="prose-portfolio">{content}</div>
        <PrevNextNav
          previous={previous ? { title: previous.title, href: `/projects/${previous.slug}` } : undefined}
          next={next ? { title: next.title, href: `/projects/${next.slug}` } : undefined}
        />
      </div>
    </article>
  )
}
