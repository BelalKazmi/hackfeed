import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import InfoCard from './';

test('render InfoCard correctly', () => {
  const { container } = render(
    <InfoCard
      title={'Belal'}
      url={'www.hackfeed.herokuapp.com'}
      tag={['story']}
    />
  );
  expect(screen.getByRole('heading')).toHaveTextContent('Belal');
});
