import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Home from './Home';

test('render Home correctly', () => {
  const { container } = render(<Home name="Belal Ali Kazmi"/>)
  expect(screen.getByRole('heading')).toHaveTextContent('Hello Belal Ali Kazmi!');
});
