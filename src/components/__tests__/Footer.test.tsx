import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

it('renders the copyright notice', () => {
  render(<Footer />);
  expect(screen.getByText(/© 2026 CATENARIA/)).toBeInTheDocument();
});

it('renders Privacy Policy link', () => {
  render(<Footer />);
  expect(screen.getByText(/Privacy Policy/)).toBeInTheDocument();
});
