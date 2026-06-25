import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProjectsGrid } from '../ProjectsGrid'
import type { Project } from '../../data/projects'

const sample: Project[] = [
  { id: 'a', title: 'Alpha', description: 'desc a', tech: ['Go'] },
  { id: 'b', title: 'Beta', description: 'desc b', tech: ['Rust'] },
]

describe('ProjectsGrid', () => {
  it('renders one card per project', () => {
    render(<ProjectsGrid projects={sample} />)
    expect(screen.getByText('Alpha')).toBeInTheDocument()
    expect(screen.getByText('Beta')).toBeInTheDocument()
    expect(screen.getByText('Go')).toBeInTheDocument()
  })
})
