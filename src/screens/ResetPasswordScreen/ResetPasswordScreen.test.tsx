import { renderWithReduxAndNavigation } from 'components/App/App'
import { fireEvent, wait, getByText } from '@testing-library/react-native'

describe('ResetPasswordScreen', () => {
  const initialRouteName = 'ResetPasswordScreen';

  test('Renders copyright notice', () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('© 2020 LiveLot LLC All Rights Reserved')
  })

  test('pressing home button redirects to SplashScreen', async () => {
    const { getByTestId, getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => { fireEvent.press(getByTestId('login-home')) })

    getByText('LiveLot 🌴')
  })
})