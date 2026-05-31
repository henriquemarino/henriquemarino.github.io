import Link from 'next/link'
import { Terminal } from '@/components/workspace/Terminal'
import { getAllPosts, getAllProjects } from '@/lib/content/collections'

export default function NotFound() {
  const projects = getAllProjects()
  const posts = getAllPosts()

  return (
    <section className="workspace-bg px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 font-mono text-sm text-highlight">404</p>
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Arquivo não encontrado</h1>
        <p className="mb-8 max-w-2xl text-text-light">
          O caminho não existe nesse workspace. Use o terminal abaixo ou volte para a Home.
        </p>
        <Terminal projectCount={projects.length} postCount={posts.length} compact />
        <Link href="/" className="mt-8 inline-flex rounded-md bg-secondary px-5 py-3 text-sm font-semibold text-white hover:bg-accent">
          Voltar para Home
        </Link>
      </div>
    </section>
  )
}
