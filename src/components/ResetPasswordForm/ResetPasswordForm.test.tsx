import { renderWithNavigation } from 'components/App/App'
import { fireEvent, wait, render, getAllByPlaceholderText } from '@testing-library/react-native'

describe('ResetPasswordForm', () => {
  const initialRouteName = 'ResetPasswordScreen';

  test('Renders ResetPasswordForm', () => {
    const { getAllByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getAllByText('Reset Password')
  })

  test('renders email label', () => {
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Enter Email')
  })

  test('renders email placeholder', () => {
    const { getByPlaceholderText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByPlaceholderText('Email')
  })

  test('submitting a blank email throws error', async () => {
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => { fireEvent.press(getByText('Reset Password')) })

    getByText('Please enter a valid email')
  })

  test('renders password label', () => {
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Enter Password')
  })

  test('renders password placeholder', () => {
    const { getByPlaceholderText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByPlaceholderText('Password')
  })

  test('submitting a blank password throws error', async () => {
    const { getByText, getByPlaceholderText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => { fireEvent.changeText(getByPlaceholderText('Email'), 'New Text') })
    await wait(() => { fireEvent.press(getByText('Reset Password')) })

    getByText('Please enter your password')
  })


  test('renders new password label', () => {
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Enter New Password')
  })

  test('renders new password placeholder', () => {
    const { getByPlaceholderText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByPlaceholderText('New Password')
  })

  test('submitting a blank new password field throws error', async () => {
    const { getByText, getByPlaceholderText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => { fireEvent.changeText(getByPlaceholderText('Email'), 'New Text') })
    await wait(() => { fireEvent.changeText(getByPlaceholderText('New Password'), 'New Text') })
    await wait(() => { fireEvent.press(getByText('Reset Password')) })

    getByText('Please enter your password')
  })

  test('renders confirm new password label', () => {
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Confirm Password')
  })

  test('renders confirm new password placeholder', () => {
    const { getByPlaceholderText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByPlaceholderText('Confirm Password')
  })

  test('submitting a blank confirm new password field throws error', async () => {
    const { getByText, getByPlaceholderText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => { fireEvent.changeText(getByPlaceholderText('Email'), 'New Text') })
    await wait(() => { fireEvent.changeText(getByPlaceholderText('New Password'), 'New Text') })
    await wait(() => { fireEvent.changeText(getByPlaceholderText('Confirm Password'), 'New Text') })

    await wait(() => { fireEvent.press(getByText('Reset Password')) })

    getByText('Please enter your password')
  })

  test('submitting a valid reset password form redirects to home screen', async () => {
    const { getByText, getByPlaceholderText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => { fireEvent.changeText(getByPlaceholderText('Email'), 'New Text') })

    await wait(() => { fireEvent.changeText(getByPlaceholderText('Password'), 'New Text') })

    await wait(() => { fireEvent.changeText(getByPlaceholderText('New Password'), 'New Text') })

    await wait(() => { fireEvent.changeText(getByPlaceholderText('Confirm Password'), 'New Text') })



    await wait(() => { fireEvent.press(getByText('Reset Password')) })

    getByText('Mines Lots')
  })

  test('pressing login button redirects to login page', async () => {
    const { getByText, getByTestId } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => fireEvent.press(getByText('Login')))

    getByTestId('login-email-input')
  })

  test('renders password reset title', () => {
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Password Reset')
  })
})