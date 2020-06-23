import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './';
import { BrowserRouter } from 'react-router-dom';

test('render Home correctly', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(getByText('BLACK LIVES MATTER')).toBeInTheDocument();
});
