import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lalala text', () => {
  render(<App />);
  expect(screen.getByText('lalala')).toBeInTheDocument();
});
