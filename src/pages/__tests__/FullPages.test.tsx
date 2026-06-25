import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProjectsPage } from '../ProjectsPage'
import { ResearchPage } from '../ResearchPage'
import { projects } from '../../data/projects'
import { publications } from '../../data/publications'

describe('full list pages', () => {
  it('ProjectsPage renders every project', () => {
    render(<ProjectsPage />)
    projects.forEach((p) => expect(screen.getByText(p.title)).toBeInTheDocument())
  })

  it('ResearchPage renders every publication', () => {
    render(<ResearchPage />)
    publications.forEach((p) => expect(screen.getByText(p.title)).toBeInTheDocument())
  })
})
