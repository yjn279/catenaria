import { render, screen } from '@testing-library/react'
import { Hero } from '../Hero'

it('renders the hero kicker and headline', () => {
  render(<Hero />)
  expect(screen.getByText(/Human Partner for AI Era/i)).toBeInTheDocument()
})

it('renders Vibe Coding reference in heading', () => {
  render(<Hero />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Vibe Coding/i)
})
