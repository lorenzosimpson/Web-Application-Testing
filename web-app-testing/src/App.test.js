import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App, { changeBall } from './App';
import { testNameToKey } from 'jest-snapshot/build/utils';
import { get } from 'https';
import expectExport from 'expect';


test('Balls count should reset to 0 after 4 clicks', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('ball-button'));
  fireEvent.click(getByTestId('ball-button'));
  fireEvent.click(getByTestId('ball-button'));
  fireEvent.click(getByTestId('ball-button'));

  expect(getByTestId('ball-display').textContent).toBe('Ball 0');
});

test('Strikes count should reset to 0 after 3 clicks', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('strike-button'));
  fireEvent.click(getByTestId('strike-button'));
  fireEvent.click(getByTestId('strike-button'));

  expect(getByTestId('strike-display').textContent).toBe('Strike 0');
})

test('Hits button should reset balls to 0', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('hits-button'));

  expect(getByTestId('ball-display').textContent).toBe('Ball 0')
}) 