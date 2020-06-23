import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotFound from './';

test('render NotFound correctly', () => {
  const { container } = render(<NotFound />);
  expect(screen.getByRole('heading')).toHaveTextContent('Oops, nothing here!');
});
