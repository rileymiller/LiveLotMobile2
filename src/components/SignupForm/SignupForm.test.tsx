import 'react-native';
import { fireEvent, getByText, wait, } from '@testing-library/react-native';
import { renderWithReduxAndNavigation } from 'components/App/App'

describe('SignupForm', () => {
  const initialRouteName = 'SignupScreen'
  test('renders email input', () => {
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

  test('renders username input', () => {
    const { getByPlaceholderText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByPlaceholderText('Username')
  })


  test('renders username input', () => {
    const { getByLabelText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName },
    })

    getByLabelText('Username')
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

  test('renders signup button', () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Signup')
  })

  test('Signup button has accessibility label', () => {
    const { getByLabelText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByLabelText('Signup Button')
  })

  // TODO: re-enable after adding OAuth2
  // test('renders Facebook login button', () => {
  //   const initialRouteName = 'SignupScreen'
  //   const { getByText } = renderWithReduxAndNavigation({
  //     navigatorConfig: { initialRouteName }
  //   })

  //   getByText('Login in with Facebook')
  // })

  // TODO: re-enable after adding OAuth2

  // test('renders Google login button', () => {
  //   const initialRouteName = 'SignupScreen'
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

    getByLabelText('Signup Button')
  })

  test('Email error message displays when input is empty', () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.press(getByText('Signup'))

    getByText('Please enter a valid email')
  })

  test('Username error message displays when input is empty', async () => {
    const { getByTestId, getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.changeText(getByTestId('signup-email-input'), 'yoo')


    await wait(() => fireEvent.press(getByText('Signup')))

    getByText('Please enter a valid username')

  })

  test('Password error message displays when input is empty', async () => {
    const { getByTestId, getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.changeText(getByTestId('signup-email-input'), 'yoo')

    fireEvent.changeText(getByTestId('signup-username-input'), 'yooes')

    await wait(() => fireEvent.press(getByText('Signup')))

    getByText('Please enter a valid password')

  })

  test('Confirm password error message displays when input is empty', async () => {
    const { getByTestId, getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.changeText(getByTestId('signup-email-input'), 'yoo')

    fireEvent.changeText(getByTestId('signup-username-input'), 'secreasdt')

    fireEvent.changeText(getByTestId('signup-password-input'), 'secret')

    await wait(() => fireEvent.press(getByText('Signup')))

    getByText('Please enter a valid password')

  })

  test('Confirm password error message displays when a non matching password is entered', async () => {
    const { getByTestId, getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    fireEvent.changeText(getByTestId('signup-email-input'), 'yoo')

    fireEvent.changeText(getByTestId('signup-username-input'), 'spaghetti')

    fireEvent.changeText(getByTestId('signup-password-input'), 'secret')

    fireEvent.changeText(getByTestId('signup-confirm-password-input'), 'sesacret')

    await wait(() => fireEvent.press(getByText('Signup')))

    getByText('Please enter a valid password')

  })

  // TODO: reenable test after adding back homescreen
  // test('Confirm password error message does not display when a matching password is entered', async () => {
  //   const { getByTestId, getByText, queryByText } = renderWithReduxAndNavigation({
  //     navigatorConfig: { initialRouteName }
  //   })

  //   fireEvent.changeText(getByTestId('signup-email-input'), 'yoo')

  //   fireEvent.changeText(getByTestId('signup-password-input'), 'secret')

  //   fireEvent.changeText(getByTestId('signup-confirm-password-input'), 'secret')

  //   await wait(() => fireEvent.press(getByText('Signup')))

  //   expect(queryByText('Please enter a matching password')).toBeNull()

  // })

  test('Renders Forgot Password link', () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Forgot Password?')
  })
});