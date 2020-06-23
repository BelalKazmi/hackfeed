import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StoryBoard from './';

test('render StoryBoard correctly', () => {
  const staticContext = {
    data: [
      {
        title: 'Belal',
        objectID: '12',
      },
    ],
  };
  const match = {
    params: {
      page: '1',
    },
  };
  const { container } = render(
    <StoryBoard staticContext={staticContext} match={match} />
  );
  expect(screen.getByRole('listitem')).toHaveTextContent('Belal');
});
