import { render, screen } from '@testing-library/react'
import { Hero } from '../Hero'

it('renders the hero kicker and headline', () => {
  render(<Hero />)
  expect(screen.getByText(/Production-Ready Partner/i)).toBeInTheDocument()
})

it('renders Vibe Code reference in heading', () => {
  render(<Hero />)
  expect(screen.getByText(/Vibe Code/i)).toBeInTheDocument()
})
