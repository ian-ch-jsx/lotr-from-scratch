import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nav links', () => {
  render(<App />);
  const nav = screen.getByText(/Films/i);

  expect(nav).toBeInTheDocument();
});
