import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AvatarCard from './';

test('render AvatarCard correctly', () => {
  const { container } = render(<AvatarCard author="BelalKazmi" />);
  expect(screen.getByRole('heading')).toHaveTextContent('BelalKazmi');
});
