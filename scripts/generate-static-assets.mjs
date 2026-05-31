import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { DEFAULT_SITE_URL } from '../config/site.mjs'

const root = process.cwd()
const publicDir = path.join(root, 'public')
const contentDir = path.join(root, 'content')
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL

function ensurePublicDir() {
  fs.mkdirSync(publicDir, { recursive: true })
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function readCollection(collection) {
  const directory = path.join(contentDir, collection)
  if (!fs.existsSync(directory)) return []

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, '')
      const raw = fs.readFileSync(path.join(directory, file), 'utf8')
      const parsed = matter(raw)

      return {
        slug,
        body: parsed.content,
        readingTime: readingTime(parsed.content).text.replace('min read', 'min de leitura'),
        ...parsed.data,
      }
    })
    .filter((item) => item.published !== false)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
}

function absolute(pathname) {
  if (pathname === '/') return siteUrl
  return `${siteUrl}${pathname}`
}

function writeRobots() {
  const body = `User-agent: *
Allow: /

Sitemap: ${absolute('/sitemap.xml')}
`
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), body)
}

function writeSitemap(posts, projects) {
  const staticRoutes = [
    { url: '/', lastmod: '2026-05-31' },
    { url: '/about/', lastmod: '2026-05-31' },
    { url: '/projects/', lastmod: '2026-05-31' },
    { url: '/blog/', lastmod: '2026-05-31' },
    { url: '/contact/', lastmod: '2026-05-31' },
  ]
  const projectRoutes = projects.map((project) => ({
    url: `/projects/${project.slug}/`,
    lastmod: project.updated ?? project.date,
  }))
  const postRoutes = posts.map((post) => ({
    url: `/blog/${post.slug}/`,
    lastmod: post.updated ?? post.date,
  }))

  const urls = [...staticRoutes, ...projectRoutes, ...postRoutes]
    .map(
      (route) => `  <url>
    <loc>${escapeXml(absolute(route.url))}</loc>
    <lastmod>${escapeXml(route.lastmod)}</lastmod>
  </url>`,
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml)
}

function writeRss(posts) {
  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(absolute(`/blog/${post.slug}/`))}</link>
      <guid>${escapeXml(absolute(`/blog/${post.slug}/`))}</guid>
      <pubDate>${new Date(`${post.date}T00:00:00-03:00`).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`,
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Henrique Marino - Artigos técnicos</title>
    <link>${escapeXml(siteUrl)}</link>
    <description>Backend, arquitetura, Java, Node.js, Redis, PostgreSQL e engenharia de software.</description>
    <language>pt-BR</language>
${items}
  </channel>
</rss>
`

  fs.writeFileSync(path.join(publicDir, 'rss.xml'), xml)
}

function writeSearchIndex(posts, projects) {
  const entries = [
    ...posts.map((post) => ({
      type: 'post',
      title: post.title,
      description: post.description,
      href: `/blog/${post.slug}`,
      tags: post.tags ?? [],
      date: post.date,
      readingTime: post.readingTime,
    })),
    ...projects.map((project) => ({
      type: 'project',
      title: project.title,
      description: project.description,
      href: `/projects/${project.slug}`,
      tags: project.tags ?? [],
      date: project.date,
      stack: project.stack ?? [],
    })),
  ]

  fs.writeFileSync(path.join(publicDir, 'search-index.json'), `${JSON.stringify(entries, null, 2)}\n`)
}

function main() {
  ensurePublicDir()

  const posts = readCollection('blog')
  const projects = readCollection('projects')

  fs.writeFileSync(path.join(publicDir, '.nojekyll'), '')
  writeRobots()
  writeSitemap(posts, projects)
  writeRss(posts)
  writeSearchIndex(posts, projects)
}

main()
