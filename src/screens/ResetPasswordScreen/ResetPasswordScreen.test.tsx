import { renderWithNavigation } from 'components/App/App'
import { fireEvent, wait } from '@testing-library/react-native'

describe('ResetPasswordScreen', () => {
  const initialRouteName = 'ResetPasswordScreen';

  test('Renders copyright notice', () => {
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('© 2020 LiveLot LLC All Rights Reserved')
  })
})