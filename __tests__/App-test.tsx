/**
 * @format
 */

import 'react-native';
import { fireEvent } from '@testing-library/react-native';
import { renderWithNavigation } from '../src/App';

describe('App', () => {
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
    expect(getByTestId('location-display').props.children).toBe(
      initialRouteName,
    );
  });
});
