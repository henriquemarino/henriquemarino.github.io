import { DEFAULT_BASE_PATH, DEFAULT_SITE_URL } from '@/config/site'

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? DEFAULT_BASE_PATH

export const siteConfig = {
  name: 'Henrique Marino',
  handle: 'henriquecpp',
  title: 'Henrique Marino - Software Engineer',
  description:
    'Portfólio de Henrique Marino, engenheiro de software backend focado em Java, Spring Boot, Node.js, PostgreSQL, Redis, Docker, microsserviços e arquitetura.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
  locale: 'pt_BR',
  email: 'henriquedotcpp@gmail.com',
  phone: '+55 (11) 91306-4646',
  location: 'São Paulo, Brasil',
  github: 'https://github.com/henriquecpp',
  linkedin: 'https://www.linkedin.com/in/henrique-cpp',
  ogImage: '/img/og-image.svg',
}

export function withBasePath(path: string) {
  if (!basePath) return path
  if (/^https?:\/\//.test(path)) return path
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`
}

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.url}${normalized === '/' ? '' : normalized}`
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00-03:00`))
}
