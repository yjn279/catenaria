import { fireEvent, render, screen } from '@testing-library/react'
import { track } from '../../lib/analytics'
import { About } from '../About'

vi.mock('../../lib/analytics', async () => {
  const actual = await vi.importActual('../../lib/analytics')
  return { ...actual, track: vi.fn() }
})

afterEach(() => {
  vi.mocked(track).mockClear()
})

it('renders the about section title', () => {
  render(<About />)
  expect(screen.getByText(/CATENARIA について/)).toBeInTheDocument()
})

it('renders CATENARIA brand name in profile', () => {
  render(<About />)
  expect(screen.getAllByText(/CATENARIA/).length).toBeGreaterThan(0)
})

it('renders contact email', () => {
  render(<About />)
  expect(screen.getByText(/catenaria\.dev@gmail\.com/)).toBeInTheDocument()
})

it('records email_click when the contact email is clicked', () => {
  render(<About />)
  fireEvent.click(screen.getByText(/catenaria\.dev@gmail\.com/))
  expect(track).toHaveBeenCalledExactlyOnceWith('email_click', { location: 'about' })
})
