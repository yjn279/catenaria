import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'

it('renders the copyright notice', () => {
  render(<Footer />)
  expect(screen.getByText(/© 2026 CATENARIA/)).toBeInTheDocument()
})

it('renders TOP link in footer nav', () => {
  render(<Footer />)
  expect(screen.getByText(/^TOP$/)).toBeInTheDocument()
})

it('discloses the use of Google Analytics', () => {
  render(<Footer />)
  expect(screen.getByText(/Google アナリティクス/)).toBeInTheDocument()
})
