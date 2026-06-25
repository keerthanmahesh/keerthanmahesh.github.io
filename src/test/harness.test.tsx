import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('test harness', () => {
  it('renders DOM', () => {
    render(<div>harness ok</div>)
    expect(screen.getByText('harness ok')).toBeInTheDocument()
  })
})
