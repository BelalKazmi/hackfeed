import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StoryBoard from './StoryBoard';

test('render App correctly', () => {
  const staticContext = {
    data: [
      {
        title: 'Belal',
        objectID: '12',
      },
    ],
  };
  const { container } = render(<StoryBoard staticContext={staticContext} />);
  expect(screen.getByRole('listitem')).toHaveTextContent('Belal');
});
