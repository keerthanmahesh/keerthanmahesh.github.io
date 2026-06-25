import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { ProjectsPage } from '../ProjectsPage'
import { ResearchPage } from '../ResearchPage'
import { projects } from '../../data/projects'
import { publications } from '../../data/publications'

describe('full list pages', () => {
  it('ProjectsPage renders every project', () => {
    render(
      <MemoryRouter>
        <ProjectsPage />
      </MemoryRouter>,
    )
    projects.forEach((p) => expect(screen.getByText(p.title)).toBeInTheDocument())
  })

  it('ResearchPage renders every publication', () => {
    render(
      <MemoryRouter>
        <ResearchPage />
      </MemoryRouter>,
    )
    publications.forEach((p) => expect(screen.getByText(p.title)).toBeInTheDocument())
  })
})
