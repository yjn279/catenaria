import { render, screen } from '@testing-library/react';
import { Faq } from '../Faq';

it('renders the FAQ section title', () => {
  render(<Faq />);
  expect(screen.getByText(/よくある質問/)).toBeInTheDocument();
});

it('renders first FAQ question', () => {
  render(<Faq />);
  expect(screen.getByText(/途中まで自分で／AIで書いたコードでも見てもらえますか？/)).toBeInTheDocument();
});
