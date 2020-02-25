import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import store from 'state/store'
import { initialState } from 'state/auth/reducer'
import { render } from '@testing-library/react-native';

import SplashScreen from 'screens/SplashScreen/SplashScreen';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import LoginScreen from 'screens/LoginScreen/LoginScreen';
import SignupScreen from 'screens/SignupScreen/SignupScreen';
import ResetPasswordScreen from 'screens/ResetPasswordScreen/ResetPasswordScreen'

import { colors } from 'colors/colors'
import { Store } from 'redux';


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

const App = () => {
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
