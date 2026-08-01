import { fireEvent, render, screen } from '@testing-library/react'
import { track } from '../../lib/analytics'
import { Header } from '../Header'

vi.mock('../../lib/analytics', async () => {
  const actual = await vi.importActual('../../lib/analytics')
  return { ...actual, track: vi.fn() }
})

afterEach(() => {
  vi.mocked(track).mockClear()
})

it('renders CATENARIA brand name', () => {
  render(<Header />)
  expect(screen.getByText(/CATENARIA/)).toBeInTheDocument()
})

it('renders the CTA button', () => {
  render(<Header />)
  expect(screen.getByText(/無料で相談する/)).toBeInTheDocument()
})

it('records nav_click with the target section on each nav link', () => {
  render(<Header />)
  fireEvent.click(screen.getByText('Services'))
  expect(track).toHaveBeenCalledExactlyOnceWith('nav_click', { destination: 'services' })
})

it('records cta_click when the header CTA is clicked', () => {
  render(<Header />)
  fireEvent.click(screen.getByText('無料で相談する'))
  expect(track).toHaveBeenCalledExactlyOnceWith('cta_click', {
    location: 'header',
    destination: 'contact',
  })
})
