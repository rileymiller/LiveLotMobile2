import { renderWithReduxAndNavigation } from 'components/App/App'
import { fireEvent, wait, render, getAllByPlaceholderText } from '@testing-library/react-native'

describe('ResetPasswordForm', () => {
  const initialRouteName = 'ResetPasswordScreen';

  test('Renders ResetPasswordForm', () => {
    const { getAllByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getAllByText('Reset Password')
  })

  test('renders email label', () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Enter Email')
  })

  test('renders email accessibility label', () => {
    const { getByLabelText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByLabelText('Email')
  })


  test('renders email placeholder', () => {
    const { getByPlaceholderText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByPlaceholderText('Email')
  })

  test('submitting a blank email throws error', async () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => { fireEvent.press(getByText('Reset Password')) })

    getByText('Please enter a valid email')
  })

  test('renders password label', () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Enter Password')
  })

  test('renders password accessibility label', () => {
    const { getByLabelText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByLabelText('Password')
  })

  test('renders password placeholder', () => {
    const { getByPlaceholderText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByPlaceholderText('Password')
  })

  test('submitting a blank password throws error', async () => {
    const { getByText, getByPlaceholderText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => { fireEvent.changeText(getByPlaceholderText('Email'), 'New Text') })
    await wait(() => { fireEvent.press(getByText('Reset Password')) })

    getByText('Please enter your password')
  })


  test('renders new password label', () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Enter New Password')
  })

  test('renders new password accessibility label', () => {
    const { getByLabelText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByLabelText('New Password')
  })

  test('renders new password placeholder', () => {
    const { getByPlaceholderText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByPlaceholderText('New Password')
  })

  test('submitting a blank new password field throws error', async () => {
    const { getByText, getByPlaceholderText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => { fireEvent.changeText(getByPlaceholderText('Email'), 'New Text') })
    await wait(() => { fireEvent.changeText(getByPlaceholderText('New Password'), 'New Text') })
    await wait(() => { fireEvent.press(getByText('Reset Password')) })

    getByText('Please enter your password')
  })

  test('renders confirm new password label', () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Confirm Password')
  })

  test('renders confirm new password accessibility label', () => {
    const { getByLabelText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByLabelText('Confirm Password')
  })

  test('renders confirm new password placeholder', () => {
    const { getByPlaceholderText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByPlaceholderText('Confirm Password')
  })

  test('submitting a blank confirm new password field throws error', async () => {
    const { getByText, getByPlaceholderText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => { fireEvent.changeText(getByPlaceholderText('Email'), 'New Text') })
    await wait(() => { fireEvent.changeText(getByPlaceholderText('New Password'), 'New Text') })
    await wait(() => { fireEvent.changeText(getByPlaceholderText('Confirm Password'), 'New Text') })

    await wait(() => { fireEvent.press(getByText('Reset Password')) })

    getByText('Please enter your password')
  })

  // TODO: reenable this test after enabling homescreen
  // test('submitting a valid reset password form redirects to home screen', async () => {
  //   const { getByText, getByPlaceholderText } = renderWithReduxAndNavigation({
  //     navigatorConfig: { initialRouteName }
  //   })

  //   await wait(() => { fireEvent.changeText(getByPlaceholderText('Email'), 'New Text') })

  //   await wait(() => { fireEvent.changeText(getByPlaceholderText('Password'), 'New Text') })

  //   await wait(() => { fireEvent.changeText(getByPlaceholderText('New Password'), 'New Text') })

  //   await wait(() => { fireEvent.changeText(getByPlaceholderText('Confirm Password'), 'New Text') })



  //   await wait(() => { fireEvent.press(getByText('Reset Password')) })

  //   getByText('Mines Lots')
  // })

  test('pressing login button redirects to login page', async () => {
    const { getByText, getByTestId } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => fireEvent.press(getByText('Login')))

    getByTestId('login-email-input')
  })

  test('renders password reset title', () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('InsertLogo')
  })
})