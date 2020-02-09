/**
 * @format
 */

import 'react-native';
import { fireEvent } from '@testing-library/react-native';
import { renderWithNavigation } from './App';

describe('App', () => {
  test('Renders Login Page on load', async () => {
    const { findByText, getByTestId, getByText } = renderWithNavigation();
    expect(getByTestId('title').props.children).toMatch('LiveLot');
  });

  // test('rendering a component that uses withNavigation', () => {
  //   const initialRouteName = 'Location';
  //   const { getByTestId } = renderWithNavigation({
  //     navigatorConfig: { initialRouteName },
  //   });
  //   expect(getByTestId('location-display').props.children).toBe(
  //     initialRouteName,
  //   );
  // });
});
