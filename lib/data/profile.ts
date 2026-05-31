import { siteConfig } from '@/lib/site'

export const profile = {
  name: siteConfig.name,
  role: 'Software Engineer',
  headline: 'Backend, arquitetura e sistemas que continuam de pé quando o tráfego aperta.',
  summary:
    'Sou desenvolvedor backend com foco em Java, Spring Boot, Node.js, PostgreSQL, Redis, Docker, microsserviços e arquitetura de software. Gosto de transformar problemas complexos em serviços previsíveis, observáveis e fáceis de evoluir.',
  availability: 'Disponível para conversas técnicas e oportunidades selecionadas',
  experienceYears: '3+',
  completedProjects: '20+',
  resume: [
    {
      period: '2022 - atual',
      title: 'Engenharia Backend',
      description:
        'Construção de APIs, microsserviços, integrações assíncronas, modelagem relacional e pipelines de entrega com foco em confiabilidade.',
    },
    {
      period: 'Stack principal',
      title: 'Java, Spring Boot, Node.js, PostgreSQL, Redis e Docker',
      description:
        'Experiência prática em serviços backend, bancos transacionais, cache, mensageria, conteinerização e desenho de componentes para crescimento.',
    },
    {
      period: 'Modo de trabalho',
      title: 'Arquitetura pragmática e aprendizado contínuo',
      description:
        'Valorizo código simples, contratos explícitos, métricas úteis, documentação objetiva e colaboração com pessoas técnicas e não técnicas.',
    },
  ],
  links: {
    github: siteConfig.github,
    linkedin: siteConfig.linkedin,
    email: `mailto:${siteConfig.email}`,
  },
}
