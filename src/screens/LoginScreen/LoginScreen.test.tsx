import { renderWithNavigation } from 'components/App/App'
import { fireEvent, wait } from '@testing-library/react-native'
describe('LoginScreen', () => {
  const initialRouteName = 'LoginScreen';
  test('Renders LoginScreen when LoginScreen is in focus', () => {
    const { findByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    });

    // change this text to be something from the login form
    expect(findByText(/Login bitches/i)).toBeTruthy()
  });

  test('Renders copyright notice', () => {
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('© 2020 LiveLot LLC All Rights Reserved')
  })

  test('Pressing Signup button switches to Login page', async () => {
    const { getByText, getByTestId } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => fireEvent.press(getByText('Signup')))

    getByTestId('signup-email-input')
  })
})