import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

test('render App correctly', () => {
  const { container } = render(<App />)
  expect(screen.getByRole('heading')).toHaveTextContent('Belal Ali Kazmi');
});
