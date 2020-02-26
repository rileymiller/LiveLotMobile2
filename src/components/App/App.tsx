import React from 'react';
import { useEffect, useState } from 'react'
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import store from 'state/store'
import { initialState } from 'state/auth/reducer'
import { render } from '@testing-library/react-native';
import io from "socket.io-client";
import SplashScreen from 'screens/SplashScreen/SplashScreen';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import LoginScreen from 'screens/LoginScreen/LoginScreen';
import SignupScreen from 'screens/SignupScreen/SignupScreen';
import BackToSplashScreenButton from 'components/BackToSplashScreenButton/BackToSplashScreenButton'
import ResetPasswordScreen from 'screens/ResetPasswordScreen/ResetPasswordScreen'
import { spacing } from 'spacing/spacing'
import { Icon } from 'react-native-elements'
import { colors } from 'colors/colors'
// import { Store } from 'redux';


type RootStackParamList = {
  LoginScreen: undefined,
  SplashScreen: undefined,
  ResetPasswordScreen: undefined,
  SignupScreen: undefined
};

const Stack = createStackNavigator<RootStackParamList>()

// const Navigation = createAppContainer(AppNavigator);
// const serverURL = "http://localhost:3000"
const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getToken = () => {
    let userToken
    try {
      userToken = AsyncStorage.getItem('userToken')
    } catch (e) {
      console.error(e)
    }
    return userToken
  }

  useEffect(() => {
    // try to restore token from Async Storage, if token is restored, redirect to homescreen

    // socket example
    //   const socket = io(serverURL, {
    //     transportOptions: {
    //       polling: {
    //         extraHeaders: {
    //           token: getToken()
    //         }
    //       }
    //     }
    //   })
    //   socket.on("HELLO", (data: any) => console.log('received payload', data))

  }, [])

  const defaultNavigationOptions: StackNavigationOptions = {
    title: '',
    headerBackTitle: 'Back',
    headerStyle: {
      backgroundColor: colors.backgroundPrimaryColor
    },
    headerTitleStyle: {
      color: colors.textPrimaryColor,
      fontWeight: 'bold'
    },
    headerRight: () => null,
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={defaultNavigationOptions}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

// function renderWithNavigation({ screens = {}, navigatorConfig = {}, } = {}) {
//   const AppNavigatorRender = createStackNavigator(
//     {
//       SplashScreen,
//       HomeScreen,
//       LoginScreen,
//       SignupScreen,
//       ResetPasswordScreen,
//       ...screens,
//     },
//     {
//       initialRouteName: 'SplashScreen',
//       defaultNavigationOptions: {
//         headerStyle: {
//           backgroundColor: colors.backgroundPrimaryColor,
//         },
//         headerTintColor: colors.textPrimaryColor,
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       },
//       ...navigatorConfig
//     },
//   );
//   const AppRender = createAppContainer(AppNavigatorRender);
//   return { ...render(<AppRender />), navigationContainer: Navigation };
// }
type navInitialRoute = {
  initialRouteName: string
}
function renderWithReduxAndNavigation({ screens = {}, navigatorConfig = {}, mockStore = store } = {}) {
  const Stack = createStackNavigator()
  const castNavConfig = navigatorConfig as navInitialRoute
  return {
    ...render(
      <Provider store={mockStore}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={`${castNavConfig?.initialRouteName ?? "SplashScreen"}`}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    ),
    store
  };
}

export { renderWithReduxAndNavigation, App, RootStackParamList };
