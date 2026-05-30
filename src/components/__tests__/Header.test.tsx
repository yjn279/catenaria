import { render, screen } from '@testing-library/react'
import { Header } from '../Header'

it('renders CATENARIA brand name', () => {
  render(<Header />)
  expect(screen.getByText(/CATENARIA/)).toBeInTheDocument()
})

it('renders the CTA button', () => {
  render(<Header />)
  expect(screen.getByText(/無料で相談する/)).toBeInTheDocument()
})
