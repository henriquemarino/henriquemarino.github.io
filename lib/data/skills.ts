import type { LucideIcon } from 'lucide-react'
import {
  Boxes,
  Braces,
  Cloud,
  Code2,
  Coffee,
  Container,
  Database,
  GitBranch,
  Leaf,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Wrench,
} from 'lucide-react'

export type SkillFile = {
  name: string
  icon: LucideIcon
  extension: string
  level: 'core' | 'strong' | 'working'
  description: string
  usage: string[]
}

export type SkillFolder = {
  id: string
  label: string
  path: string
  icon: LucideIcon
  files: SkillFile[]
}

export const skillFolders: SkillFolder[] = [
  {
    id: 'languages',
    label: 'Linguagens',
    path: '/skills/languages',
    icon: Code2,
    files: [
      {
        name: 'Java',
        icon: Coffee,
        extension: '.java',
        level: 'core',
        description: 'Linguagem principal para serviços backend, APIs e microsserviços.',
        usage: ['Spring Boot', 'APIs REST', 'serviços orientados a eventos'],
      },
      {
        name: 'TypeScript',
        icon: Braces,
        extension: '.ts',
        level: 'strong',
        description: 'Uso em backend Node.js e em ferramentas para produtividade de engenharia.',
        usage: ['Node.js', 'NestJS', 'scripts internos'],
      },
      {
        name: 'SQL',
        icon: Database,
        extension: '.sql',
        level: 'strong',
        description: 'Modelagem, consultas, índices e análise de performance em bancos relacionais.',
        usage: ['PostgreSQL', 'MySQL', 'query tuning'],
      },
    ],
  },
  {
    id: 'databases',
    label: 'Banco de Dados',
    path: '/skills/databases',
    icon: Database,
    files: [
      {
        name: 'PostgreSQL',
        icon: Database,
        extension: '.db',
        level: 'core',
        description: 'Banco relacional principal para modelagem transacional e consultas previsíveis.',
        usage: ['índices', 'migrations', 'transações'],
      },
      {
        name: 'Redis',
        icon: Server,
        extension: '.cache',
        level: 'strong',
        description: 'Cache, controle de concorrência leve e padrões de expiração para reduzir latência.',
        usage: ['cache-aside', 'TTL', 'rate limiting'],
      },
      {
        name: 'DynamoDB',
        icon: Boxes,
        extension: '.nosql',
        level: 'working',
        description: 'Modelagem orientada a acesso para workloads serverless e cloud-native.',
        usage: ['single-table design', 'AWS', 'eventos'],
      },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    path: '/skills/frameworks',
    icon: Leaf,
    files: [
      {
        name: 'Spring Boot',
        icon: Leaf,
        extension: '.spring',
        level: 'core',
        description: 'Base para APIs, autenticação, integração com bancos e serviços corporativos.',
        usage: ['Spring Web', 'Spring Security', 'JPA'],
      },
      {
        name: 'NestJS',
        icon: Network,
        extension: '.nest',
        level: 'strong',
        description: 'Arquitetura modular em Node.js para APIs e serviços com TypeScript.',
        usage: ['providers', 'modules', 'DTOs'],
      },
      {
        name: 'Hibernate',
        icon: Boxes,
        extension: '.orm',
        level: 'working',
        description: 'Mapeamento objeto-relacional com atenção a transações e N+1 queries.',
        usage: ['JPA', 'lazy loading', 'migrations'],
      },
    ],
  },
  {
    id: 'cloud-devops',
    label: 'Cloud & DevOps',
    path: '/skills/cloud-devops',
    icon: Cloud,
    files: [
      {
        name: 'Docker',
        icon: Container,
        extension: '.container',
        level: 'core',
        description: 'Ambientes reproduzíveis para desenvolvimento, testes e publicação de serviços.',
        usage: ['Dockerfiles', 'Compose', 'multi-stage builds'],
      },
      {
        name: 'AWS',
        icon: Cloud,
        extension: '.cloud',
        level: 'strong',
        description: 'Uso de serviços gerenciados para mensageria, storage, deploy e integrações.',
        usage: ['S3', 'SES', 'SNS', 'Bedrock'],
      },
      {
        name: 'CI/CD',
        icon: GitBranch,
        extension: '.pipeline',
        level: 'working',
        description: 'Pipelines para build, validação e deploy com rastreabilidade.',
        usage: ['GitHub Actions', 'quality gates', 'static export'],
      },
    ],
  },
  {
    id: 'engineering',
    label: 'Engenharia',
    path: '/skills/engineering',
    icon: Wrench,
    files: [
      {
        name: 'Microsserviços',
        icon: Network,
        extension: '.arch',
        level: 'core',
        description: 'Divisão de responsabilidades, contratos claros e comunicação assíncrona.',
        usage: ['event-driven', 'idempotência', 'observabilidade'],
      },
      {
        name: 'Segurança',
        icon: ShieldCheck,
        extension: '.sec',
        level: 'strong',
        description: 'Autenticação, autorização e proteção básica em APIs expostas.',
        usage: ['JWT', 'OAuth2', 'Spring Security'],
      },
      {
        name: 'CLI & Debugging',
        icon: Terminal,
        extension: '.tool',
        level: 'strong',
        description: 'Uso diário de terminal, logs, tracing manual e ferramentas de inspeção.',
        usage: ['Linux', 'Git', 'Postman'],
      },
    ],
  },
]

export const levelLabels = {
  core: 'Core',
  strong: 'Forte',
  working: 'Em uso',
} as const
