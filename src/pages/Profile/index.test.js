import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Profile from './';

test('render Profile correctly', () => {
  const { getByText } = render(<Profile />);
  expect(getByText('Belal Ali Kazmi')).toBeInTheDocument();
});
