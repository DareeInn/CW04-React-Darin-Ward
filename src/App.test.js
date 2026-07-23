import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the CW-04 React application', () => {
  render(<App />);
  expect(screen.getByText(/Hello World!/i)).toBeInTheDocument();
  expect(screen.getByText(/Interactive Counter/i)).toBeInTheDocument();
  expect(screen.getByText(/Produce Finder/i)).toBeInTheDocument();
});
