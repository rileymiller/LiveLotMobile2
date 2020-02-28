import { renderWithReduxAndNavigation } from 'components/App/App'
import { fireEvent, wait } from '@testing-library/react-native'

describe('SignOutButton', () => {
  const initialRouteName = 'HomeScreen';

  test('Renders Component', () => {
    const { getByTestId } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByTestId('home-sign-out')
  })
})