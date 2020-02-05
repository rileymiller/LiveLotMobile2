/**
 * @format
 */

import 'react-native';
// import React from 'react';
// import AppView from '../src/App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

import { fireEvent } from '@testing-library/react-native';
import { renderWithNavigation } from '../src/App';
// import AppView from '../src/App';

// import renderer from 'react-test-renderer';
export const add = (a: number, b: number) => a + b;
describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 1)).toEqual(2);
  });
});

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
// test('renders correctly', () => {
//   const tree = renderer.create(<AppView />).toJSON();
//   console.log(tree)
//   expect(tree).toMatchSnapshot();
// });
// test('full app rendering/navigating', async () => {
//   const { findByText, getByTestId, getByText, debug } = renderWithNavigation();
//   debug();
//   expect(getByTestId('title').props.children).toMatch('Home page');
//   fireEvent.press(getByText(/Details/i));
//   await expect(findByText('Details')).toBeTruthy();
// });

// test('rendering a component that uses withNavigation', () => {
//   const initialRouteName = 'Location';
//   const { getByTestId } = renderWithNavigation({
//     navigatorConfig: { initialRouteName },
//   });
//   expect(getByTestId('location-display').props.children).toBe(initialRouteName);
// });
