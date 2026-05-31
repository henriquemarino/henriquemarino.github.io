import { describe, expect, it } from 'vitest'
import {
  getAllPosts,
  getAllProjects,
  getProjectBySlug,
  getSearchEntries,
} from '@/lib/content/collections'

// Smoke tests for the content pipeline: catch broken/missing frontmatter,
// renamed/removed files and malformed MDX before they reach a deploy.

describe('projects', () => {
  const projects = getAllProjects()

  it('exposes the expected project slugs', () => {
    expect(projects.map((p) => p.slug).sort()).toEqual(
      ['jwt-rbac-spring', 'notification-service', 'rehab-ai'].sort(),
    )
  })

  it('has the required frontmatter on every project', () => {
    for (const project of projects) {
      expect(project.title, project.slug).toBeTruthy()
      expect(project.description, project.slug).toBeTruthy()
      expect(project.date, project.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(project.stack.length, project.slug).toBeGreaterThan(0)
      expect(project.tags.length, project.slug).toBeGreaterThan(0)
      expect(project.body.length, project.slug).toBeGreaterThan(0)
    }
  })

  it('links every project to a real repository', () => {
    for (const project of projects) {
      expect(project.repo, project.slug).toMatch(/^https:\/\/github\.com\//)
    }
  })

  it('resolves a project by slug and returns undefined for unknown slugs', () => {
    expect(getProjectBySlug('rehab-ai')?.title).toBeTruthy()
    expect(getProjectBySlug('does-not-exist')).toBeUndefined()
  })
})

describe('blog', () => {
  const posts = getAllPosts()

  it('has at least one published post with required frontmatter', () => {
    expect(posts.length).toBeGreaterThan(0)
    for (const post of posts) {
      expect(post.title, post.slug).toBeTruthy()
      expect(post.description, post.slug).toBeTruthy()
      expect(post.date, post.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })

  it('returns posts sorted newest-first', () => {
    const dates = posts.map((p) => Number(new Date(p.date)))
    const sorted = [...dates].sort((a, b) => b - a)
    expect(dates).toEqual(sorted)
  })
})

describe('search index', () => {
  it('includes every project and post', () => {
    const entries = getSearchEntries()
    expect(entries.length).toBe(getAllProjects().length + getAllPosts().length)
  })
})
