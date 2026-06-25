import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { App } from '../App'
import { profile } from '../data/profile'

describe('App routing', () => {
  it('renders Home at /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: profile.name })).toBeInTheDocument()
  })

  it('renders ProjectsPage at /projects', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: /\/\/ projects/i })).toBeInTheDocument()
  })

  it('renders ExperiencePage at /experience', () => {
    render(
      <MemoryRouter initialEntries={['/experience']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: /\/\/ experience/i })).toBeInTheDocument()
  })
})
