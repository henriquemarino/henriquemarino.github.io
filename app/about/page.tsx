import type { Metadata } from 'next'
import { AboutSection } from '@/components/home/AboutSection'
import { SkillsSection } from '@/components/home/SkillsSection'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description: 'Sobre Henrique Marino, experiência backend, stack principal e currículo técnico incorporado.',
  alternates: {
    canonical: absoluteUrl('/about'),
  },
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-primary px-4 pt-10 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: 'About' }]} />
        </div>
      </div>
      <AboutSection full />
      <SkillsSection />
    </>
  )
}
