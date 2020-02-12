import 'react-native';
import { fireEvent, getByText, wait, } from '@testing-library/react-native';
import { renderWithNavigation } from 'components/App/App'

describe('LoginForm', () => {
  const initialRouteName = 'LoginScreen'
  test('renders email input', async () => {
    const { getByPlaceholderText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByPlaceholderText('Email')
  })

  test('renders email accessibility label', () => {
    const { getByLabelText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByLabelText('Email')
  })

  test('renders password input', () => {
    const { getByPlaceholderText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByPlaceholderText('Password')
  })

  test('renders password accessibility label', () => {
    const { getByLabelText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByLabelText('Password')
  })

  test('renders login button', () => {
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Login')
  })

  test('login button has accessibility label', () => {
    const { getByLabelText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByLabelText('Login Button')
  })

  // TODO: re-enable after adding OAuth2
  // test('renders Facebook login button', () => {
  //   const initialRouteName = 'LoginScreen'
  //   const { getByText } = renderWithNavigation({
  //     navigatorConfig: { initialRouteName }
  //   })

  //   getByText('Login in with Facebook')
  // })

  // TODO: re-enable after adding OAuth2

  // test('renders Google login button', () => {
  //   const initialRouteName = 'LoginScreen'
  //   const { getByText } = renderWithNavigation({
  //     navigatorConfig: { initialRouteName }
  //   })

  //   getByText('Login in with Google')
  // })

  test('renders Signup button', () => {
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Signup')
  })

  test('Signup button has accessibility label', () => {
    const { getByLabelText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByLabelText('Signup button')
  })

  test('Email error message displays when input is empty', () => {
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.press(getByText('Login'))

    getByText('Please enter your email')
  })

  test('Password error message displays when input is empty', async () => {
    const { getByTestId, getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.changeText(getByTestId('login-email-input'), 'yoo')

    await wait(() => fireEvent.press(getByText('Login')))

    getByText('Please enter your password')

  })
});