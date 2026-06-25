import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BackgroundMesh } from '../BackgroundMesh'

describe('BackgroundMesh', () => {
  it('renders a decorative, non-interactive canvas without crashing', () => {
    const { container } = render(<BackgroundMesh />)
    const canvas = container.querySelector('canvas')
    expect(canvas).toBeInTheDocument()
    expect(canvas).toHaveAttribute('aria-hidden', 'true')
  })
})
