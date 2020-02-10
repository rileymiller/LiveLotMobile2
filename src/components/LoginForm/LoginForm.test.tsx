import 'react-native';
import { fireEvent, getByText, wait, } from '@testing-library/react-native';
import { renderWithNavigation } from 'components/App/App'

describe('LoginForm', () => {
  test('renders username input', async () => {
    const initialRouteName = 'LoginScreen'
    const { getByPlaceholderText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByPlaceholderText('Username')
  })

  test('renders username accessibility label', () => {
    const initialRouteName = 'LoginScreen'
    const { getByLabelText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByLabelText('Username')
  })

  test('renders password input', () => {
    const initialRouteName = 'LoginScreen'
    const { getByPlaceholderText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByPlaceholderText('Password')
  })

  test('renders password accessibility label', () => {
    const initialRouteName = 'LoginScreen'
    const { getByLabelText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByLabelText('Password')
  })

  test('renders login button', () => {
    const initialRouteName = 'LoginScreen'
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Login')
  })

  test('login button has accessibility label', () => {
    const initialRouteName = 'LoginScreen'
    const { getByLabelText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByLabelText('Login Button')
  })

  test('renders Facebook login button', () => {
    const initialRouteName = 'LoginScreen'
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Login in with Facebook')
  })

  test('renders Google login button', () => {
    const initialRouteName = 'LoginScreen'
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Login in with Google')
  })

  test('renders Signup button', () => {
    const initialRouteName = 'LoginScreen'
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Signup')
  })

  test('Signup button has accessibility label', () => {
    const initialRouteName = 'LoginScreen'
    const { getByLabelText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByLabelText('Signup button')
  })

  test('Username error message displays when input is empty', () => {
    const initialRouteName = 'LoginScreen'
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.press(getByText('Login'))

    getByText('Please enter your username or email')
  })

  test('Password error message displays when input is empty', async () => {
    const initialRouteName = 'LoginScreen'
    const { getByTestId, getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.changeText(getByTestId('username-input'), 'yoo')

    await wait(() => fireEvent.press(getByText('Login')))

    getByText('Please enter your password')

  })
});