import { render, screen } from '@testing-library/react'
import { About } from '../About'

it('renders the about section title', () => {
  render(<About />)
  expect(screen.getByText(/私たちについて/)).toBeInTheDocument()
})

it('renders CATENARIA brand name in profile', () => {
  render(<About />)
  expect(screen.getByText(/CATENARIA/)).toBeInTheDocument()
})

it('renders contact email', () => {
  render(<About />)
  expect(screen.getByText(/hello@catenaria\.jp/)).toBeInTheDocument()
})
