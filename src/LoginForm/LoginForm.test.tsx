import 'react-native';
import { fireEvent } from '@testing-library/react-native';
import { renderWithNavigation } from '../App/App'

describe('LoginForm', () => {
  test('Renders Login Page on load', async () => {
    const { findByText, getByTestId, getByText } = renderWithNavigation();
    expect(getByTestId('title').props.children).toMatch('LiveLot');
  });

  test('rendering a component that uses withNavigation', () => {
    const initialRouteName = 'LoginScreen';
    const { getByTestId } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    });
    expect(getByTestId('title').props.children).toBe(
      'LiveLot'
    );
  });

});