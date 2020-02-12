import { renderWithNavigation } from 'components/App/App'

// The SplashScreen is set as the default route so this will render on app load
describe('SplashScreen', () => {
  test('Renders SplashScreen with Start View on app load', () => {
    const initialRouteName = 'SplashScreen';
    const { getByTestId } = renderWithNavigation({
      navigatorConfig: { initialRouteName },
    });
    expect(getByTestId('title').props.children).toBe(
      'LiveLot 🌴'
    );
  });
});
