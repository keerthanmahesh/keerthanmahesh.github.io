import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ExperienceList } from '../ExperienceList'
import type { Experience } from '../../data/experience'

const sample: Experience[] = [
  { id: 'a', company: 'Acme', role: 'Engineer', location: 'NYC', start: '2020', end: '2021', highlights: ['did things', 'more things'] },
  { id: 'b', company: 'Globex', role: 'Lead', location: 'LA', start: '2021', end: 'Present', highlights: ['led stuff'] },
]

describe('ExperienceList', () => {
  it('renders one entry per role with company and highlights', () => {
    render(<ExperienceList items={sample} />)
    expect(screen.getByText(/Acme/)).toBeInTheDocument()
    expect(screen.getByText(/Globex/)).toBeInTheDocument()
    expect(screen.getByText('did things')).toBeInTheDocument()
    expect(screen.getByText('led stuff')).toBeInTheDocument()
  })
})
