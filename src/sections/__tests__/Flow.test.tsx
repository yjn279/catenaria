import { render, screen } from '@testing-library/react'
import { Flow } from '../Flow'

it('renders the flow section title', () => {
  render(<Flow />)
  expect(screen.getByText(/ご依頼の流れ/)).toBeInTheDocument()
})

it('renders お問い合わせ step', () => {
  render(<Flow />)
  expect(screen.getByText('お問い合わせ')).toBeInTheDocument()
})

it('renders ご契約 step', () => {
  render(<Flow />)
  expect(screen.getByText(/ご契約/)).toBeInTheDocument()
})
