import { renderWithReduxAndNavigation } from 'components/App/App'

// The SplashScreen is set as the default route so this will render on app load
describe('SplashScreen', () => {
  const initialRouteName = 'SplashScreen';
  test('Renders SplashScreen with Start View on app load', () => {
    const { getByTestId } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName },
    });
    expect(getByTestId('title').props.children).toBe(
      'LiveLot 🌴'
    );
  });

  test('Renders copyright notice', () => {
    const { getByText } = renderWithReduxAndNavigation({
      navigatorConfig: { initialRouteName }
    })

    getByText('© 2020 LiveLot LLC All Rights Reserved')
  })
});
