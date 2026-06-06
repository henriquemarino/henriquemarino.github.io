import { siteConfig } from '@/lib/site'

export const profile = {
  name: siteConfig.name,
  role: 'Software Engineer',
  headline: 'Desenvolvedor backend. Gosto de sistemas simples, bem modelados e confiáveis.',
  summary:
    'Desenvolvedor backend com foco em Java, Spring Boot e Node.js, além de PostgreSQL, Redis e Docker. Venho construindo uma base técnica desde 2017 e gosto de entender bem um problema antes de sair codando. Prefiro soluções simples, que continuem fáceis de manter depois.',
  experienceYears: '3+',
  completedProjects: '20+',
  resume: [
    {
      period: '2022 - atual',
      title: 'Engenharia Backend',
      description:
        'Construo APIs e serviços backend, com atenção à modelagem dos dados e à confiabilidade do que vai pra produção.',
    },
    {
      period: 'Stack principal',
      title: 'Java, Spring Boot, Node.js, PostgreSQL, Redis e Docker',
      description:
        'Trabalho no dia a dia com serviços backend, bancos relacionais, cache, mensageria e containers.',
    },
    {
      period: 'Modo de trabalho',
      title: 'Arquitetura pragmática e aprendizado contínuo',
      description:
        'Prezo por código simples e bem documentado, e por explicar decisões técnicas de um jeito que pessoas não-técnicas entendam.',
    },
  ],
  links: {
    github: siteConfig.github,
    linkedin: siteConfig.linkedin,
    email: `mailto:${siteConfig.email}`,
  },
}
