import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CommentNumeralCard from './';

test('render CommentNumeralCard correctly', () => {
  const { getByText } = render(<CommentNumeralCard comments={2} />);
  expect(getByText('Comments')).toBeInTheDocument();
});
