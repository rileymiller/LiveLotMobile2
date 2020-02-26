import { renderWithReduxAndNavigation } from 'components/App/App'
import { fireEvent, wait } from '@testing-library/react-native'

describe('BackToSplashScreenButton', () => {
  const initialRouteName = 'LoginScreen';

  test('Renders Component', () => {
    const { getByTestId } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByTestId('login-home')
  })
})