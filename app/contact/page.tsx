import type { Metadata } from 'next'
import { ContactSection } from '@/components/home/ContactSection'
import { Terminal } from '@/components/workspace/Terminal'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { getAllPosts, getAllProjects } from '@/lib/content/collections'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Canais de contato de Henrique Marino: e-mail, GitHub e LinkedIn.',
  alternates: {
    canonical: absoluteUrl('/contact'),
  },
}

export default function ContactPage() {
  const projects = getAllProjects()
  const posts = getAllPosts()

  return (
    <>
      <section className="bg-primary px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <Terminal projectCount={projects.length} postCount={posts.length} compact />
        </div>
      </section>
      <ContactSection />
    </>
  )
}
