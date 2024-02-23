import { render, screen } from '@testing-library/react';
import EmailDetail from './EmailDetail';

test('renders learn react link', () => {
  render(<EmailDetail />);
  const linkElement = screen.getByText('Compose');
  expect(linkElement).toBeInTheDocument();
});
