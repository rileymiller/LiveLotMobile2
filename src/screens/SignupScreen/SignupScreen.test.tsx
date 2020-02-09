import { renderWithNavigation } from '../../components/App/App'

describe('SignupScreen', () => {
  test('Renders SignupScreen when SignupScreen is in focus', () => {
    const initialRouteName = 'SignupScreen';
    const { findByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    });

    // change this text to be something from the signup form
    expect(findByText(/Signup bitches/i)).toBeTruthy()
  });
})