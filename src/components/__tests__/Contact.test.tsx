import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Contact } from '../Contact'
import { profile } from '../../data/profile'

describe('Contact', () => {
  it('renders github, linkedin, and email links', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', profile.socials.github)
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', profile.socials.linkedin)
    expect(screen.getByRole('link', { name: /email/i })).toHaveAttribute('href', `mailto:${profile.socials.email}`)
  })
})
