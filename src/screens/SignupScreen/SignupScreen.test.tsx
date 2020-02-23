import { renderWithNavigation } from 'components/App/App'
import { fireEvent, wait } from '@testing-library/react-native'
describe('SignupScreen', () => {
  const initialRouteName = 'SignupScreen';
  test('Renders SignupScreen when SignupScreen is in focus', () => {
    const { findByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    });

    // change this text to be something from the signup form
    expect(findByText(/Signup bitches/i)).toBeTruthy()
  });

  test('Renders copyright notice', () => {
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('© 2020 LiveLot LLC All Rights Reserved')
  })

  test('Pressing Login button switches to Login page', async () => {
    const { getByText, getByTestId } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => fireEvent.press(getByText('Login')))

    getByTestId('login-email-input')
  })

  test('pressing home button redirects to SplashScreen', async () => {
    const { getByTestId, getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    await wait(() => { fireEvent.press(getByTestId('login-home')) })

    getByText('LiveLot 🌴')
  })

  test('render user signup title', () => {
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('Signup')
  })
})