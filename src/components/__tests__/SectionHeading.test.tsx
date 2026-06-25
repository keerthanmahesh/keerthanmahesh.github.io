import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SectionHeading } from '../SectionHeading'

describe('SectionHeading', () => {
  it('renders the title with a // prefix', () => {
    render(<SectionHeading title="projects" />)
    expect(screen.getByText('//')).toBeInTheDocument()
    expect(screen.getByText('projects')).toBeInTheDocument()
  })
})
