import Link from 'next/link'
import { Code2, Mail, MapPin, Network } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/lib/site'

export function ContactSection({ compact = false }: { compact?: boolean }) {
  return (
    <section id="contact" className="bg-dark px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="contact.sh"
          title="Contato"
          description="Sem backend no GitHub Pages: contato direto, previsível e sem formulário falso."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <Link href={`mailto:${siteConfig.email}`} className="rounded-lg border border-secondary/30 bg-light/60 p-5 hover:border-highlight/50">
            <Mail className="mb-4 h-7 w-7 text-highlight" aria-hidden="true" />
            <h3 className="mb-2 font-semibold">E-mail</h3>
            <p className="text-sm text-text-light">{siteConfig.email}</p>
          </Link>
          <Link href={siteConfig.github} target="_blank" className="rounded-lg border border-secondary/30 bg-light/60 p-5 hover:border-highlight/50">
            <Code2 className="mb-4 h-7 w-7 text-highlight" aria-hidden="true" />
            <h3 className="mb-2 font-semibold">GitHub</h3>
            <p className="text-sm text-text-light">@{siteConfig.handle}</p>
          </Link>
          <Link href={siteConfig.linkedin} target="_blank" className="rounded-lg border border-secondary/30 bg-light/60 p-5 hover:border-highlight/50">
            <Network className="mb-4 h-7 w-7 text-highlight" aria-hidden="true" />
            <h3 className="mb-2 font-semibold">LinkedIn</h3>
            <p className="text-sm text-text-light">henrique-cpp</p>
          </Link>
        </div>

        {!compact ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-text-light">
            <MapPin className="h-4 w-4 text-highlight" aria-hidden="true" />
            {siteConfig.location}
          </div>
        ) : null}
      </div>
    </section>
  )
}
