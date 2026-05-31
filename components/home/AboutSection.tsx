import Image from 'next/image'
import Link from 'next/link'
import { Award, ExternalLink, GitBranch } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/lib/data/profile'
import { withBasePath } from '@/lib/site'

export function AboutSection({ full = false }: { full?: boolean }) {
  return (
    <section id="about" className="bg-dark px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="about.md"
          title={full ? 'About + currículo' : 'Sobre mim'}
          description="Uma visão direta de como penso backend, produto e evolução técnica."
        />

        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div className="mx-auto w-full max-w-sm">
            <div className="relative">
              <div className="absolute -inset-4 rounded-lg border-2 border-secondary/30" />
              <Image
                src={withBasePath('/img/profile-picture.jpeg')}
                alt="Henrique Marino"
                width={800}
                height={800}
                priority={!full}
                className="relative z-10 aspect-square w-full rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold">Olá, sou Henrique Marino</h3>
            <p className="mb-4 leading-relaxed text-text-light">{profile.summary}</p>
            <p className="mb-8 leading-relaxed text-text-light">
              Meu foco é construir sistemas backend com contratos claros, boa modelagem de dados, observabilidade suficiente e decisões arquiteturais que cabem no estágio real do produto.
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg border border-secondary/30 bg-light/60 p-4">
                <Award className="h-8 w-8 text-highlight" aria-hidden="true" />
                <div>
                  <p className="font-semibold">{profile.experienceYears} anos</p>
                  <p className="text-sm text-text-light">experiência backend</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-secondary/30 bg-light/60 p-4">
                <GitBranch className="h-8 w-8 text-highlight" aria-hidden="true" />
                <div>
                  <p className="font-semibold">{profile.completedProjects} projetos</p>
                  <p className="text-sm text-text-light">pessoais e profissionais</p>
                </div>
              </div>
            </div>

            <div id="resume" className="space-y-4">
              {profile.resume.map((item) => (
                <div key={`${item.period}-${item.title}`} className="rounded-lg border border-secondary/30 bg-light/60 p-4">
                  <p className="mb-1 font-mono text-xs uppercase text-highlight">{item.period}</p>
                  <h4 className="mb-2 font-semibold">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
                </div>
              ))}
            </div>

            {!full ? (
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-highlight hover:underline">
                Ver About completo
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
