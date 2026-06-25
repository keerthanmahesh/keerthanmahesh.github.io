import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from '../Hero'
import { profile } from '../../data/profile'

describe('Hero', () => {
  it('renders name and tagline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: profile.name })).toBeInTheDocument()
    expect(screen.getByText(profile.tagline)).toBeInTheDocument()
  })
})
