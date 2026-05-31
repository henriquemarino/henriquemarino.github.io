import { AboutSection } from '@/components/home/AboutSection'
import { BlogSection } from '@/components/home/BlogSection'
import { ContactSection } from '@/components/home/ContactSection'
import { HeroSection } from '@/components/home/HeroSection'
import { ProjectsSection } from '@/components/home/ProjectsSection'
import { SkillsSection } from '@/components/home/SkillsSection'
import { getAllPosts, getAllProjects } from '@/lib/content/collections'

export default function HomePage() {
  const projects = getAllProjects()
  const posts = getAllPosts()

  return (
    <>
      <HeroSection projectCount={projects.length} postCount={posts.length} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projects.filter((project) => project.featured).slice(0, 3)} />
      <BlogSection posts={posts.filter((post) => post.featured).slice(0, 3)} />
      <ContactSection compact />
    </>
  )
}
