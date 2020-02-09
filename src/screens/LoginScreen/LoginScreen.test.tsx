import { renderWithNavigation } from '../../components/App/App'

describe('LoginScreen', () => {
  test('Renders LoginScreen when LoginScreen is in focus', () => {
    const initialRouteName = 'LoginScreen';
    const { findByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    });

    // change this text to be something from the login form
    expect(findByText(/Login bitches/i)).toBeTruthy()
  });
})