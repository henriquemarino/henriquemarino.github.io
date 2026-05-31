import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/content/ProjectCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Project } from '@/lib/content/types'

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="bg-dark px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="projects/"
          title="Projetos em destaque"
          description="Cada projeto tem uma página com o contexto, a stack e as principais decisões técnicas."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-md border border-secondary px-5 py-3 text-sm font-semibold hover:bg-secondary">
            Abrir todos os projetos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
