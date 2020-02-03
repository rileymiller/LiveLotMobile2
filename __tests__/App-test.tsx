/**
 * @format
 */

import 'react-native';
import React from 'react';
import AppView from '../src/App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

import { render, fireEvent } from '@testing-library/react-native';
// import { renderWithNavigation } from '../src/App';

test('full app rendering/navigating', async () => {
  const { findByText, getByTestId, getByText } = render(<AppView />);
  expect(getByTestId('title').props.children).toMatch('Home page');
  fireEvent.press(getByText(/Details/i));
  await expect(findByText('Details')).toBeTruthy();
});

// test('rendering a component that uses withNavigation', () => {
//   const initialRouteName = 'Location';
//   const { getByTestId } = renderWithNavigation({
//     navigatorConfig: { initialRouteName },
//   });
//   expect(getByTestId('location-display').props.children).toBe(initialRouteName);
// });
