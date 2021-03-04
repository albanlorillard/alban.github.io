import { render, screen } from '@testing-library/react';
import AboutPages from './App';

test('renders learn react link', () => {
  render(<AboutPages />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
