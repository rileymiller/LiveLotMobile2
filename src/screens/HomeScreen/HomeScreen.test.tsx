import { renderWithNavigation } from 'components/App/App'
import { fireEvent, wait, getByTestId } from '@testing-library/react-native'
describe('HomeScreen', () => {
  test('Renders HomeScreen when HomeScreen is in focus', () => {
    const initialRouteName = 'HomeScreen';
    const { getByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    });

    getByText('Mines Lots')
  });

  test('renders profile button button', () => {
    const initialRouteName = 'HomeScreen';
    const { getByTestId } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    });

    getByTestId('profile-button')
  })

  test('renders signout button', () => {
    const initialRouteName = 'HomeScreen';
    const { getByTestId } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    });

    getByTestId('signout-button')
  })

  test('Pressing signout button redirects to SplashScreen', async () => {
    const initialRouteName = 'HomeScreen';
    const { getByText, getByTestId } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    });


    await wait(() => fireEvent.press(getByTestId('signout-button')))

    getByText('Signup')

  })
})