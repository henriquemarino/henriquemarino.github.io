import type { Metadata } from 'next'
import { Construction } from 'lucide-react'
import { ProjectCard } from '@/components/content/ProjectCard'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { getAllProjects } from '@/lib/content/collections'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projetos pessoais de Henrique Marino com contexto técnico, stack e decisões de arquitetura.',
  alternates: {
    canonical: absoluteUrl('/projects'),
  },
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <section className="bg-primary px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <Breadcrumbs items={[{ label: 'Projects' }]} />
        <header className="mb-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-highlight">projects/</p>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Projetos principais</h1>
          <p className="max-w-3xl text-text-light">
            Estudos de caso dos meus projetos: o contexto, a stack e as decisões técnicas por trás de cada um.
          </p>
        </header>

        <div
          role="status"
          className="mb-10 flex items-start gap-3 rounded-lg border border-yellow-500/40 bg-light/70 p-4 text-sm"
        >
          <Construction className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" aria-hidden="true" />
          <div>
            <p className="mb-1 font-semibold text-text">Projetos em desenvolvimento</p>
            <p className="text-text-light">
              Estes projetos ainda estão sendo finalizados. O conteúdo abaixo é preliminar e deve mudar conforme cada estudo de caso for concluído.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
