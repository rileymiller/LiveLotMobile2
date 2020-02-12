import { renderWithNavigation } from 'components/App/App'
import { fireEvent, wait } from '@testing-library/react-native'

describe('ForgotPasswordModal', () => {
  const initialRouteName = 'LoginScreen'
  test('Forgot Password appears in title', async () => {
    const { getByText, getByTestId } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => { fireEvent.press(getByText('Forgot Password?')) })

    getByText('Forgot Password')
  })
})