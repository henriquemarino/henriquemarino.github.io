import Link from 'next/link'
import { ArrowDown, BookOpen, BriefcaseBusiness } from 'lucide-react'
import { Terminal } from '@/components/workspace/Terminal'
import { profile } from '@/lib/data/profile'

export function HeroSection({ projectCount, postCount }: { projectCount: number; postCount: number }) {
  return (
    <section className="workspace-bg relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div>

          <h1 className="glow mb-5 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
            Henrique <span className="text-highlight">Marino</span>
          </h1>
          <p className="mb-6 max-w-2xl text-lg leading-relaxed text-text-light sm:text-xl">{profile.headline}</p>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-text-light sm:text-base">{profile.summary}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent">
              <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              Ver projetos
            </Link>
            <Link href="/blog" className="inline-flex items-center justify-center gap-2 rounded-md border border-secondary px-5 py-3 text-sm font-semibold text-text transition-colors hover:bg-secondary">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Ler artigos
            </Link>
            <Link href="#skills" className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-text-light transition-colors hover:text-highlight">
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
              Explorar workspace
            </Link>
          </div>
        </div>

        <Terminal projectCount={projectCount} postCount={postCount} />
      </div>
    </section>
  )
}
