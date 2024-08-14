import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<p>d</p>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
