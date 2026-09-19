import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { ProjectsPage } from '../ProjectsPage'
import { ResearchPage } from '../ResearchPage'
import { EducationPage } from '../EducationPage'
import { projects } from '../../data/projects'
import { publications } from '../../data/publications'
import { education } from '../../data/education'

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

  it('EducationPage renders every education institution', () => {
    render(
      <MemoryRouter>
        <EducationPage />
      </MemoryRouter>,
    )
    education.forEach((e) => expect(screen.getByText(e.institution)).toBeInTheDocument())
  })
})
