import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { ProjectCard } from '../ProjectCard'
import type { Project } from '../../data/projects'

const withAffiliation: Project = {
  id: 'x', title: 'Work Project', description: 'd', tech: ['Go'], affiliation: 'konfigai-lead',
}
const personal: Project = {
  id: 'y', title: 'Personal Project', description: 'd', tech: ['Rust'],
}

describe('ProjectCard affiliation badge', () => {
  it('renders a link to the experience for affiliated projects', () => {
    render(
      <MemoryRouter>
        <ProjectCard project={withAffiliation} />
      </MemoryRouter>,
    )
    const link = screen.getByRole('link', { name: /work experience at KonfigAI/i })
    expect(link).toHaveAttribute('href', '/experience#exp-konfigai-lead')
  })

  it('renders a Personal tag for non-affiliated projects', () => {
    render(
      <MemoryRouter>
        <ProjectCard project={personal} />
      </MemoryRouter>,
    )
    expect(screen.getByText('Personal')).toBeInTheDocument()
  })
})
