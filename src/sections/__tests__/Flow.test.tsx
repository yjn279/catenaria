import { render, screen } from '@testing-library/react';
import { Flow } from '../Flow';

it('renders the flow section title', () => {
  render(<Flow />);
  expect(screen.getByText(/ご依頼の流れ/)).toBeInTheDocument();
});

it('renders 問い合わせ step', () => {
  render(<Flow />);
  expect(screen.getByText(/問い合わせ/)).toBeInTheDocument();
});

it('renders 運用 step', () => {
  render(<Flow />);
  expect(screen.getByText(/運用/)).toBeInTheDocument();
});
