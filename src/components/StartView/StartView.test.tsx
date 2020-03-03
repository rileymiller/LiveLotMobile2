import 'react-native';
import { fireEvent, findByText, render } from '@testing-library/react-native';
import { renderWithReduxAndNavigation } from 'components/App/App'

describe('StartView', () => {
  test('Renders StartView on load', async () => {
    const { getByTestId } = renderWithReduxAndNavigation();
    expect(getByTestId('title').props.children).toMatch('LiveLot');
  });

  test('renders Login button', () => {
    const { getByText } = renderWithReduxAndNavigation()

    getByText('Login')

  })

  test('renders Signup button', () => {
    const { getByText } = renderWithReduxAndNavigation()
    getByText('Signup')

  })

  test('navigates to Login Form when Login button is pressed', async () => {
    const { getByText, getByPlaceholderText } = renderWithReduxAndNavigation()

    fireEvent.press(getByText('Login'))

    getByPlaceholderText('Email')
  })

  test('navigates to Signup Form when Signup is pressed', async () => {
    const { getByText, getByPlaceholderText } = renderWithReduxAndNavigation()

    fireEvent.press(getByText(/Signup/i))

    // change to text on Signup form after implementing
    getByPlaceholderText('Confirm Password')
  })
});
