import 'react-native';
import { fireEvent, getByText, wait, } from '@testing-library/react-native';
import { renderWithReduxAndNavigation } from 'components/App/App'

describe('LoginForm', () => {
  const initialRouteName = 'LoginScreen'
  test('renders email input', async () => {
    const { getByPlaceholderText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByPlaceholderText('Email')
  })

  test('renders email accessibility label', () => {
    const { getByLabelText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByLabelText('Email')
  })

  test('renders password input', () => {
    const { getByPlaceholderText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByPlaceholderText('Password')
  })

  test('renders password accessibility label', () => {
    const { getByLabelText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByLabelText('Password')
  })

  test('renders login button', () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Login')
  })

  test('login button has accessibility label', () => {
    const { getByLabelText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByLabelText('Login Button')
  })

  // TODO: re-enable after adding OAuth2
  // test('renders Facebook login button', () => {
  //   const initialRouteName = 'LoginScreen'
  //   const { getByText } = renderWithReduxAndNavigation({
  //     navigatorConfig: { initialRouteName }
  //   })

  //   getByText('Login in with Facebook')
  // })

  // TODO: re-enable after adding OAuth2

  // test('renders Google login button', () => {
  //   const initialRouteName = 'LoginScreen'
  //   const { getByText } = renderWithReduxAndNavigation({
  //     navigatorConfig: { initialRouteName }
  //   })

  //   getByText('Login in with Google')
  // })

  test('renders Signup button', () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Signup')
  })

  test('Signup button has accessibility label', () => {
    const { getByLabelText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByLabelText('Signup button')
  })

  test('Email error message displays when input is empty', () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.press(getByText('Login'))

    getByText('Please enter a valid email')
  })

  test('Password error message displays when input is empty', async () => {
    const { getByTestId, getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.changeText(getByTestId('login-email-input'), 'yoo')

    await wait(() => fireEvent.press(getByText('Login')))

    getByText('Please enter your password')

  })

  test('Renders Forgot Password link', () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Forgot Password?')
  })

  test('Pressing Forgot Password opens Reset Password Screen', async () => {
    const { getAllByText, getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => { fireEvent.press(getByText('Forgot Password?')) })

    getAllByText('Reset Password')
  })

  // TODO: make this test work
  // test('Pressing backdrop closes Forgot Password Modal', async () => {
  //   const { getByText, queryByText } = renderWithNavigation({
  //     navigatorConfig: { initialRouteName }
  //   })

  //   await wait(() => { fireEvent.press(getByText('Forgot Password?')) })

  //   getByText('Hello World')

  //   await wait(() => { fireEvent.press(getByText('Signup')) })

  //   expect(queryByText('Hello World')).toBeNull()
  // })
});