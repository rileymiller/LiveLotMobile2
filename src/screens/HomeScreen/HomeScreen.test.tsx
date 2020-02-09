import { renderWithNavigation } from 'components/App/App'

describe('HomeScreen', () => {
  test('Renders HomeScreen when HomeScreen is in focus', () => {
    const initialRouteName = 'HomeScreen';
    const { findByText } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    });

    // change this text to be something from the Home Page form
    expect(findByText(/Home Page/i)).toBeTruthy()
  });
})