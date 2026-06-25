import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { Layout } from '../Layout'

describe('Layout', () => {
  it('renders nav links and children', () => {
    render(
      <MemoryRouter>
        <Layout>
          <p>page body</p>
        </Layout>
      </MemoryRouter>,
    )
    expect(screen.getByText('page body')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /research/i })).toBeInTheDocument()
  })
})
