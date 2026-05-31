import Link from 'next/link'
import { ArrowUpRight, GitBranch, Layers3 } from 'lucide-react'
import type { Project } from '@/lib/content/types'
import { formatDate } from '@/lib/site'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-secondary/30 bg-light/70 transition-transform hover:-translate-y-1 hover:border-highlight/50">
      <div className="border-b border-secondary/20 bg-code-bg p-5 font-mono">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-highlight">
            <GitBranch className="h-4 w-4" aria-hidden="true" />
            <span>projects/{project.slug}</span>
          </div>
          <ArrowUpRight className="h-4 w-4 text-text-light transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <h3 className="text-xl font-semibold text-text">{project.title}</h3>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-4 flex-1 text-sm leading-relaxed text-text-light">{project.description}</p>
        {project.impact ? <p className="mb-4 text-sm text-text-light">{project.impact}</p> : null}

        <div className="mb-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => (
            <span key={tech} className="rounded-full bg-secondary/80 px-3 py-1 text-xs text-text">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-secondary/20 pt-4 text-xs text-text-light">
          <span className="inline-flex items-center gap-1">
            <Layers3 className="h-3.5 w-3.5" aria-hidden="true" />
            {project.status}
          </span>
          <span>{formatDate(project.date)}</span>
        </div>

        <Link href={`/projects/${project.slug}`} className="mt-5 inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent">
          Abrir projeto
        </Link>
      </div>
    </article>
  )
}
