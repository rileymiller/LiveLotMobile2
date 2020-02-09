import 'react-native';
import { fireEvent, findByText, render } from '@testing-library/react-native';
import { renderWithNavigation } from '../App/App'
import { useNavigation } from 'src/hooks/useNavigation';
describe('StartView', () => {
  test('Renders StartView on load', async () => {
    const { getByTestId } = renderWithNavigation();
    expect(getByTestId('title').props.children).toMatch('LiveLot');
  });

  test('renders Login button', () => {
    const { getByText } = renderWithNavigation()
    getByText(/Login/i)
  })

  test('renders Signup button', () => {
    const { getByText } = renderWithNavigation()
    getByText(/Signup/i)
  })

  test('navigates to Login Form when Login button is pressed', async () => {
    const { findByText, getByText } = renderWithNavigation()

    fireEvent.press(getByText(/Login/i))

    // change to text on Login form after implementing
    await expect(findByText('Login bitches')).toBeTruthy()
  })

  test('navigates to Signup Form when Signup is pressed', async () => {
    const { findByText, getByText } = renderWithNavigation()

    fireEvent.press(getByText(/Signup/i))

    // change to text on Signup form after implementing
    await expect(findByText('Signup bitches')).toBeTruthy()
  })
});
