import { render, screen } from '@testing-library/react';
import { Contact } from '../Contact';

it('renders the contact section headline', () => {
  render(<Contact />);
  expect(screen.getByText(/話しましょう/)).toBeInTheDocument();
});

it('renders the submit button', () => {
  render(<Contact />);
  expect(screen.getByText(/送信する/)).toBeInTheDocument();
});
