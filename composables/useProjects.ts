export interface Project {
  id: string
  titleKey: string
  nameKey: string
  descriptionKey: string
  technologies: string[]
}

export const useProjects = () => {
  const projects: Project[] = [
    {
      id: 'ecommerce',
      titleKey: 'projects.project1.title',
      nameKey: 'projects.project1.name',
      descriptionKey: 'projects.project1.description',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Docker']
    },
    {
      id: 'analytics',
      titleKey: 'projects.project2.title',
      nameKey: 'projects.project2.name',
      descriptionKey: 'projects.project2.description',
      technologies: ['Python', 'Elasticsearch', 'Redis', 'AWS']
    },
    {
      id: 'authentication',
      titleKey: 'projects.project3.title',
      nameKey: 'projects.project3.name',
      descriptionKey: 'projects.project3.description',
      technologies: ['Node.js', 'MongoDB', 'JWT', 'OAuth2']
    }
  ]

  return {
    projects
  }
}