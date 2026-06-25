import { describe, it, expect } from 'vitest'
import { profile } from '../profile'
import { projects, featuredProjects } from '../projects'
import { featuredPublications } from '../publications'

describe('content data', () => {
  it('profile has required fields', () => {
    expect(profile.name).toBeTruthy()
    expect(profile.tagline).toBeTruthy()
    expect(profile.socials.github).toContain('github.com')
  })

  it('every project has a unique id and tech list', () => {
    const ids = projects.map((p) => p.id)
    expect(new Set(ids).size).toBe(projects.length)
    projects.forEach((p) => expect(Array.isArray(p.tech)).toBe(true))
  })

  it('featuredProjects returns only featured items', () => {
    expect(featuredProjects().every((p) => p.featured)).toBe(true)
  })

  it('featuredPublications returns only featured items', () => {
    expect(featuredPublications().every((p) => p.featured)).toBe(true)
  })
})
