/**
 * @format
 */

import 'react-native';
// import React from 'react';
// import App from '../App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

import { fireEvent } from '@testing-library/react-native';
import { renderWithNavigation } from '../App';

test('full app rendering/navigating', async () => {
  const { findByText, getByTestId, getByText } = renderWithNavigation();
  expect(getByTestId('title').props.children).toMatch('Home page');
  fireEvent.press(getByText(/About page/i));
  await expect(findByText('About page')).toBeTruthy();
});

test('rendering a component that uses withNavigation', () => {
  const initialRouteName = 'Location';
  const { getByTestId } = renderWithNavigation({
    navigatorConfig: { initialRouteName },
  });
  expect(getByTestId('location-display').props.children).toBe(initialRouteName);
});
