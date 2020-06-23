import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import LinkButton from './';

test('render LinkButton correctly', () => {
  const to = '/';
  const children = `Hello`;
  const { getByText } = render(
    <BrowserRouter>
      <LinkButton to={to} children={children} />
    </BrowserRouter>
  );
  expect(getByText('Hello')).toBeInTheDocument();
});
