import React from 'react';
import { useEffect, useState } from 'react'
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import store from 'state/store'
import { initialState } from 'state/auth/reducer'
import { render } from '@testing-library/react-native';
import io from "socket.io-client";
import SplashScreen from 'screens/SplashScreen/SplashScreen';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import LoginScreen from 'screens/LoginScreen/LoginScreen';
import SignupScreen from 'screens/SignupScreen/SignupScreen';
import ResetPasswordScreen from 'screens/ResetPasswordScreen/ResetPasswordScreen'

import { colors } from 'colors/colors'
// import { Store } from 'redux';


const AppNavigator = createStackNavigator(
  {
    SplashScreen,
    HomeScreen,
    LoginScreen,
    SignupScreen,
    ResetPasswordScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    defaultNavigationOptions: {
      title: '<LiveLot_logo>',
      headerBackTitle: 'Back',
      headerStyle: {
        backgroundColor: colors.backgroundPrimaryColor,
      },
      headerTintColor: colors.textPrimaryColor,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => null,
    },
  },

);


const Navigation = createAppContainer(AppNavigator);
const serverURL = "http://localhost:3000"
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
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

function renderWithNavigation({ screens = {}, navigatorConfig = {}, } = {}) {
  const AppNavigatorRender = createStackNavigator(
    {
      SplashScreen,
      HomeScreen,
      LoginScreen,
      SignupScreen,
      ResetPasswordScreen,
      ...screens,
    },
    {
      initialRouteName: 'SplashScreen',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.backgroundPrimaryColor,
        },
        headerTintColor: colors.textPrimaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
      ...navigatorConfig
    },
  );
  const AppRender = createAppContainer(AppNavigatorRender);
  return { ...render(<AppRender />), navigationContainer: Navigation };
}

function renderWithReduxAndNavigation({ screens = {}, navigatorConfig = {}, mockStore = store } = {}) {
  const AppNavigatorRender = createStackNavigator(
    {
      SplashScreen,
      HomeScreen,
      LoginScreen,
      SignupScreen,
      ResetPasswordScreen,
      ...screens,
    },
    {
      initialRouteName: 'SplashScreen',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.backgroundPrimaryColor,
        },
        headerTintColor: colors.textPrimaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
      ...navigatorConfig
    },
  );
  const AppRender = createAppContainer(AppNavigatorRender);
  return {
    ...render(
      <Provider store={mockStore}>
        <AppRender />
      </Provider>
    ),
    navigationContainer: Navigation,
    store
  };
}

export { renderWithNavigation, renderWithReduxAndNavigation, Navigation, App, AppNavigator };
