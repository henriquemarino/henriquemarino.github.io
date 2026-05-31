import { FileExplorer } from '@/components/workspace/FileExplorer'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function SkillsSection() {
  return (
    <section id="skills" className="bg-primary px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="workspace"
          title="Explorador de habilidades"
          description="A metáfora de arquivos continua central: skills como diretórios, tecnologias como arquivos e contexto técnico no painel lateral."
        />
        <FileExplorer />
      </div>
    </section>
  )
}
