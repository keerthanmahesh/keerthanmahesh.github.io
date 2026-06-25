import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ResearchList } from '../ResearchList'
import type { Publication } from '../../data/publications'

const sample: Publication[] = [
  { id: 'p1', title: 'Paper One', authors: 'A, B', year: 2025 },
  { id: 'p2', title: 'Paper Two', authors: 'C, D', year: 2026 },
]

describe('ResearchList', () => {
  it('renders one entry per publication', () => {
    render(<ResearchList publications={sample} />)
    expect(screen.getByText('Paper One')).toBeInTheDocument()
    expect(screen.getByText('Paper Two')).toBeInTheDocument()
  })
})
