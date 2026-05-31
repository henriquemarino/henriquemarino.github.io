import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { BlogPost, ContentWithBody, Project, SearchEntry } from './types'

const contentRoot = path.join(process.cwd(), 'content')

function getCollectionFiles(collection: 'blog' | 'projects') {
  const directory = path.join(contentRoot, collection)
  if (!fs.existsSync(directory)) return []

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => path.join(directory, file))
}

function slugFromFile(filePath: string) {
  return path.basename(filePath).replace(/\.(mdx|md)$/, '')
}

function asTags(value: unknown) {
  if (!Array.isArray(value)) return []
  return value.map(String)
}

function readMdxFile(filePath: string) {
  const raw = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(raw)
  const slug = slugFromFile(filePath)

  return {
    slug,
    frontmatter: parsed.data,
    body: parsed.content.trim(),
    readingTime: readingTime(parsed.content).text.replace('min read', 'min de leitura'),
  }
}

export function getAllPosts() {
  return getCollectionFiles('blog')
    .map((filePath): ContentWithBody<BlogPost> => {
      const file = readMdxFile(filePath)
      const data = file.frontmatter

      return {
        type: 'post',
        slug: file.slug,
        title: String(data.title),
        description: String(data.description),
        excerpt: data.excerpt ? String(data.excerpt) : undefined,
        date: String(data.date),
        updated: data.updated ? String(data.updated) : undefined,
        tags: asTags(data.tags),
        published: data.published !== false,
        featured: Boolean(data.featured),
        readingTime: file.readingTime,
        body: file.body,
      }
    })
    .filter((post) => post.published)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug)
}

export function getAllProjects() {
  return getCollectionFiles('projects')
    .map((filePath): ContentWithBody<Project> => {
      const file = readMdxFile(filePath)
      const data = file.frontmatter

      return {
        type: 'project',
        slug: file.slug,
        title: String(data.title),
        description: String(data.description),
        date: String(data.date),
        updated: data.updated ? String(data.updated) : undefined,
        tags: asTags(data.tags),
        published: data.published !== false,
        featured: Boolean(data.featured),
        readingTime: file.readingTime,
        status: (data.status as Project['status']) ?? 'ativo',
        role: String(data.role ?? 'Backend Engineer'),
        stack: asTags(data.stack),
        repo: data.repo ? String(data.repo) : undefined,
        demo: data.demo ? String(data.demo) : undefined,
        impact: data.impact ? String(data.impact) : undefined,
        body: file.body,
      }
    })
    .filter((project) => project.published)
    .sort((a, b) => Number(b.featured) - Number(a.featured) || Number(new Date(b.date)) - Number(new Date(a.date)))
}

export function getProjectBySlug(slug: string) {
  return getAllProjects().find((project) => project.slug === slug)
}

export function getAllTags(posts = getAllPosts()) {
  return Array.from(new Set(posts.flatMap((post) => post.tags))).sort((a, b) => a.localeCompare(b))
}

export function getSearchEntries(): SearchEntry[] {
  const posts = getAllPosts().map((post) => ({
    type: 'post' as const,
    title: post.title,
    description: post.description,
    href: `/blog/${post.slug}`,
    tags: post.tags,
    date: post.date,
  }))

  const projects = getAllProjects().map((project) => ({
    type: 'project' as const,
    title: project.title,
    description: project.description,
    href: `/projects/${project.slug}`,
    tags: project.tags,
    date: project.date,
  }))

  return [...posts, ...projects]
}
