import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import NotFound from './NotFound';

test('render App correctly', () => {
  const { container } = render(<NotFound />)
  expect(screen.getByRole('heading')).toHaveTextContent('Oops, nothing here!');
});
