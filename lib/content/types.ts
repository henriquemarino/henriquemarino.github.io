export type ContentBase = {
  slug: string
  title: string
  description: string
  date: string
  updated?: string
  tags: string[]
  published: boolean
  featured?: boolean
  readingTime: string
}

export type BlogPost = ContentBase & {
  type: 'post'
  excerpt?: string
}

export type Project = ContentBase & {
  type: 'project'
  status: 'em desenvolvimento' | 'ativo' | 'arquivado' | 'conceito'
  role: string
  stack: string[]
  repo?: string
  demo?: string
  impact?: string
}

export type ContentWithBody<T> = T & {
  body: string
}

export type SearchEntry = {
  type: 'post' | 'project'
  title: string
  description: string
  href: string
  tags: string[]
  date: string
}
