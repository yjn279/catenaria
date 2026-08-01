import { fireEvent, render, screen } from '@testing-library/react'
import { track } from '../../lib/analytics'
import { Hero } from '../Hero'

vi.mock('../../lib/analytics', async () => {
  const actual = await vi.importActual('../../lib/analytics')
  return { ...actual, track: vi.fn() }
})

afterEach(() => {
  vi.mocked(track).mockClear()
})

it('renders the hero kicker and headline', () => {
  render(<Hero />)
  expect(screen.getByText(/Human Partner for AI Era/i)).toBeInTheDocument()
})

it('renders Vibe Coding reference in heading', () => {
  render(<Hero />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Vibe Coding/i)
})

it('records cta_click when the primary CTA is clicked', () => {
  render(<Hero />)
  fireEvent.click(screen.getByText('無料で相談する'))
  expect(track).toHaveBeenCalledExactlyOnceWith('cta_click', {
    location: 'hero',
    destination: 'contact',
  })
})

it('records cta_click when the services CTA is clicked', () => {
  render(<Hero />)
  fireEvent.click(screen.getByText('サービスを見る'))
  expect(track).toHaveBeenCalledExactlyOnceWith('cta_click', {
    location: 'hero',
    destination: 'services',
  })
})
