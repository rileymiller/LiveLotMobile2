import { renderWithReduxAndNavigation } from 'components/App/App'
import { fireEvent, wait } from '@testing-library/react-native'

describe('SignOutButton', () => {
  const initialRouteName = '<insert_appropriate_screen_here>';

  test('Renders Component', () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('SignOutButton')
  })
})