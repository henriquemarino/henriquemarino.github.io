import type { LucideIcon } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Leaf,
  Network,
  ShieldCheck,
  Terminal,
  Wrench,
} from 'lucide-react'
import {
  AwsIcon,
  DockerIcon,
  DynamoDbIcon,
  GoIcon,
  HibernateIcon,
  JavaIcon,
  JenkinsIcon,
  MongoDbIcon,
  MySqlIcon,
  NestJsIcon,
  NodejsIcon,
  PostgreSqlIcon,
  RedisIcon,
  SpringIcon,
  TerraformIcon,
  TypeScriptIcon,
} from '@/components/ui/TechIcons'

// Accepts both lucide icons and the inline brand glyphs (SVG components).
export type SkillIcon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>

export type SkillFile = {
  name: string
  icon: SkillIcon
  extension: string
  level: 'core' | 'strong' | 'working' | 'planned'
  description: string
  usage: string[]
}

export type SkillFolder = {
  id: string
  label: string
  path: string
  icon: SkillIcon
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
        icon: JavaIcon,
        extension: '.java',
        level: 'core',
        description: 'Linguagem principal para serviços backend, APIs e microsserviços.',
        usage: ['Spring Boot', 'APIs REST', 'serviços orientados a eventos'],
      },
      {
        name: 'TypeScript',
        icon: TypeScriptIcon,
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
      {
        name: 'Go',
        icon: GoIcon,
        extension: '.go',
        level: 'planned',
        description: 'Ainda não estudei. Está nos meus planos aprender Go para serviços backend de alta performance e ferramentas de linha de comando.',
        usage: ['estudo planejado', 'concorrência', 'serviços backend'],
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
        icon: PostgreSqlIcon,
        extension: '.db',
        level: 'core',
        description: 'Banco relacional principal para modelagem transacional e consultas previsíveis.',
        usage: ['índices', 'migrations', 'transações'],
      },
      {
        name: 'Redis',
        icon: RedisIcon,
        extension: '.cache',
        level: 'strong',
        description: 'Cache, controle de concorrência leve e padrões de expiração para reduzir latência.',
        usage: ['cache-aside', 'TTL', 'rate limiting'],
      },
      {
        name: 'MySQL',
        icon: MySqlIcon,
        extension: '.mysql',
        level: 'strong',
        description: 'Banco relacional para modelagem transacional e consultas em SQL.',
        usage: ['SQL', 'índices', 'transações'],
      },
      {
        name: 'MongoDB',
        icon: MongoDbIcon,
        extension: '.nosql',
        level: 'working',
        description: 'Banco NoSQL orientado a documentos para dados flexíveis e schemas dinâmicos.',
        usage: ['documentos', 'agregações', 'schemas flexíveis'],
      },
      {
        name: 'DynamoDB',
        icon: DynamoDbIcon,
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
        icon: SpringIcon,
        extension: '.spring',
        level: 'core',
        description: 'Base para APIs, autenticação, integração com bancos e serviços corporativos.',
        usage: ['Spring Web', 'Spring Security', 'JPA'],
      },
      {
        name: 'NestJS',
        icon: NestJsIcon,
        extension: '.nest',
        level: 'strong',
        description: 'Arquitetura modular em Node.js para APIs e serviços com TypeScript.',
        usage: ['providers', 'modules', 'DTOs'],
      },
      {
        name: 'Node.js',
        icon: NodejsIcon,
        extension: '.js',
        level: 'strong',
        description: 'Runtime para serviços backend em JavaScript/TypeScript e ferramentas internas.',
        usage: ['APIs REST', 'NestJS', 'scripts e automações'],
      },
      {
        name: 'Hibernate',
        icon: HibernateIcon,
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
        icon: DockerIcon,
        extension: '.container',
        level: 'core',
        description: 'Ambientes reproduzíveis para desenvolvimento, testes e publicação de serviços.',
        usage: ['Dockerfiles', 'Compose', 'multi-stage builds'],
      },
      {
        name: 'AWS',
        icon: AwsIcon,
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
      {
        name: 'Terraform',
        icon: TerraformIcon,
        extension: '.tf',
        level: 'working',
        description: 'Infraestrutura como código para provisionar e versionar recursos de nuvem.',
        usage: ['IaC', 'AWS', 'providers e state'],
      },
      {
        name: 'Jenkins',
        icon: JenkinsIcon,
        extension: '.ci',
        level: 'working',
        description: 'Automação de pipelines de build, testes e deploy em servidores de CI.',
        usage: ['pipelines', 'jobs', 'integração contínua'],
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
  planned: 'Planejado',
} as const
