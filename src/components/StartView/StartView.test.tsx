import 'react-native';
import { fireEvent, findByText, render } from '@testing-library/react-native';
import { renderWithNavigation } from 'components/App/App'

describe('StartView', () => {
  test('Renders StartView on load', async () => {
    const { getByTestId } = renderWithNavigation();
    expect(getByTestId('title').props.children).toMatch('LiveLot');
  });

  test('renders Login button', () => {
    const { getByText } = renderWithNavigation()

    getByText('Login')

  })

  test('renders Signup button', () => {
    const { getByText } = renderWithNavigation()
    getByText('Signup')

  })

  test('navigates to Login Form when Login button is pressed', async () => {
    const { getByText, getByPlaceholderText } = renderWithNavigation()

    fireEvent.press(getByText('Login'))

    getByPlaceholderText('Username')
  })

  test('navigates to Signup Form when Signup is pressed', async () => {
    const { getByText } = renderWithNavigation()

    fireEvent.press(getByText(/Signup/i))

    // change to text on Signup form after implementing
    getByText('Signup bitches')
  })
});
