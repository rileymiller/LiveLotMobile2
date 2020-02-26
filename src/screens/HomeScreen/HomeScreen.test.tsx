test.todo('re-enable this test after readding homescreen')

// import { renderWithReduxAndNavigation } from 'components/App/App'
// import { fireEvent, wait, getByTestId } from '@testing-library/react-native'
// describe('HomeScreen', () => {
//   const initialRouteName = 'HomeScreen';
//   test('Renders HomeScreen when HomeScreen is in focus', () => {
//     const { getByText } = renderWithReduxAndNavigation({
//       navigatorConfig: { initialRouteName },
//     });

//     getByText('Mines Lots')
//   });

//   test('renders profile button button', () => {
//     const { getByTestId } = renderWithReduxAndNavigation({
//       navigatorConfig: { initialRouteName },
//     });

//     getByTestId('profile-button')
//   })

//   test('renders signout button', () => {
//     const { getByTestId } = renderWithReduxAndNavigation({
//       navigatorConfig: { initialRouteName },
//     });

//     getByTestId('signout-button')
//   })

//   test('Pressing signout button redirects to SplashScreen', async () => {
//     const { getByText, getByTestId } = renderWithReduxAndNavigation({
//       navigatorConfig: { initialRouteName },
//     });


//     await wait(() => fireEvent.press(getByTestId('signout-button')))

//     getByText('Signup')

//   })

//   test('Renders copyright notice', () => {
//     const { getByText } = renderWithReduxAndNavigation({
//       navigatorConfig: { initialRouteName }
//     })

//     getByText('© 2020 LiveLot LLC All Rights Reserved')
//   })
// })