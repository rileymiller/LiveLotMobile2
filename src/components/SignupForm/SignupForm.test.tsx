import 'react-native';
import { fireEvent, getByText, wait, } from '@testing-library/react-native';
import { renderWithNavigation } from 'components/App/App'

describe('SignupForm', () => {
  const initialRouteName = 'SignupScreen'
  test('renders email input', async () => {
    const { getByPlaceholderText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByPlaceholderText('Enter Email')
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

    getByPlaceholderText('Enter Password')
  })

  test('renders password accessibility label', () => {
    const { getByLabelText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByLabelText('Password')
  })

  test('renders signup button', () => {
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Signup')
  })

  test('Signup button has accessibility label', () => {
    const { getByLabelText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByLabelText('Signup Button')
  })

  // TODO: re-enable after adding OAuth2
  // test('renders Facebook login button', () => {
  //   const initialRouteName = 'SignupScreen'
  //   const { getByText } = renderWithNavigation({
  //     navigatorConfig: { initialRouteName }
  //   })

  //   getByText('Login in with Facebook')
  // })

  // TODO: re-enable after adding OAuth2

  // test('renders Google login button', () => {
  //   const initialRouteName = 'SignupScreen'
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

    getByLabelText('Signup Button')
  })

  test('Email error message displays when input is empty', () => {
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.press(getByText('Signup'))

    getByText('Please enter your email')
  })

  test('Password error message displays when input is empty', async () => {
    const { getByTestId, getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.changeText(getByTestId('signup-email-input'), 'yoo')

    await wait(() => fireEvent.press(getByText('Signup')))

    getByText('Please enter your password')

  })

  test('Confirm password error message displays when input is empty', async () => {
    const { getByTestId, getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.changeText(getByTestId('signup-email-input'), 'yoo')

    fireEvent.changeText(getByTestId('signup-password-input'), 'secret')

    await wait(() => fireEvent.press(getByText('Signup')))

    getByText('Please enter a matching password')

  })

  test('Confirm password error message displays when a non matching password is entered', async () => {
    const { getByTestId, getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.changeText(getByTestId('signup-email-input'), 'yoo')

    fireEvent.changeText(getByTestId('signup-password-input'), 'secret')

    fireEvent.changeText(getByTestId('signup-confirm-password-input'), 'sesacret')

    await wait(() => fireEvent.press(getByText('Signup')))

    getByText('Please enter a matching password')

  })

  test('Confirm password error message does not display when a matching password is entered', async () => {
    const { getByTestId, getByText, queryByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.changeText(getByTestId('signup-email-input'), 'yoo')

    fireEvent.changeText(getByTestId('signup-password-input'), 'secret')

    fireEvent.changeText(getByTestId('signup-confirm-password-input'), 'secret')

    await wait(() => fireEvent.press(getByText('Signup')))

    expect(queryByText('Please enter a matching password')).toBeNull()

  })
});