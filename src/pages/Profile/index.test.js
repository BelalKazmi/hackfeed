import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Profile from './Profile';

test('render App correctly', () => {
  const { container } = render(<Profile />);
  expect(screen.getByRole('heading')).toHaveTextContent('Profile!');
});
