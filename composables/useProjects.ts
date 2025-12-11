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
      id: 'Rehab.AI',
      titleKey: 'projects.project1.title',
      nameKey: 'projects.project1.name',
      descriptionKey: 'projects.project1.description',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Docker', 'Textract', 'Bedrock', 'S3']
    },
    {
      id: 'Notification',
      titleKey: 'projects.project2.title',
      nameKey: 'projects.project2.name',
      descriptionKey: 'projects.project2.description',
      technologies: ['Java', 'Spring Boot', 'RabbitMQ', 'Docker', 'AWS', 'SES', 'SNS']
    },
    {
      id: 'authentication',
      titleKey: 'projects.project3.title',
      nameKey: 'projects.project3.name',
      descriptionKey: 'projects.project3.description',
      technologies: ['Java', 'Spring Security', 'JWT', 'OAuth2', 'PostgreSQL']
    }
  ]

  return {
    projects
  }
}