import { render, screen } from '@testing-library/react'
import { Services } from '../Services'

it('renders the services section title', () => {
  render(<Services />)
  expect(screen.getByText(/サービス \/ 料金/)).toBeInTheDocument()
})

it('renders Vibe Coding Cleanup service card', () => {
  render(<Services />)
  // Multiple elements contain "Vibe Coding Cleanup" (card + SVG diagram)
  const matches = screen.getAllByText(/Vibe Coding Cleanup/)
  expect(matches.length).toBeGreaterThan(0)
})

it('renders mini-CTO service', () => {
  render(<Services />)
  const matches = screen.getAllByText(/mini-CTO/)
  expect(matches.length).toBeGreaterThan(0)
})

it('renders Service Cycle figure caption', () => {
  render(<Services />)
  expect(screen.getByText(/サービスの相関図/)).toBeInTheDocument()
})
