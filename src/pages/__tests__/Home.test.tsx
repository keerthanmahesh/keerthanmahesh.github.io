import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { Home } from '../Home'
import { profile } from '../../data/profile'

describe('Home', () => {
  it('renders hero, section headings, and contact', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: profile.name })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /\/\/ about/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /\/\/ projects/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /\/\/ research/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /\/\/ contact/i })).toBeInTheDocument()
  })
})
