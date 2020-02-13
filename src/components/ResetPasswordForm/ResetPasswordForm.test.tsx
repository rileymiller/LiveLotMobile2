import { renderWithNavigation } from 'components/App/App'
import { fireEvent, wait, render, getAllByPlaceholderText } from '@testing-library/react-native'

describe('ResetPasswordForm', () => {
  const initialRouteName = 'ResetPasswordScreen';

  test('Renders Component', () => {
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

  test('renders email place holder', () => {
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

  test('submitting a valid email redirects to login page', async () => {
    const { getByTestId, getByText, getByPlaceholderText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => { fireEvent.changeText(getByPlaceholderText('Email'), 'New Text') })

    await wait(() => { fireEvent.press(getByText('Reset Password')) })

    getByTestId('login-email-input')
  })

  test('pressing login button redirects to login page', async () => {
    const { getByText, getByTestId } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => fireEvent.press(getByText('Login')))

    getByTestId('login-email-input')
  })
})