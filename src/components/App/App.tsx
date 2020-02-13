import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import { render } from '@testing-library/react-native';

import SplashScreen from 'screens/SplashScreen/SplashScreen';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import LoginScreen from 'screens/LoginScreen/LoginScreen';
import SignupScreen from 'screens/SignupScreen/SignupScreen';
import ResetPasswordScreen from 'screens/ResetPasswordScreen/ResetPasswordScreen'

import { colors } from 'colors/colors'


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
const App = createAppContainer(AppNavigator);

function renderWithNavigation({ screens = {}, navigatorConfig = {} } = {}) {
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
  return { ...render(<AppRender />), navigationContainer: App };
}

export { renderWithNavigation, App, AppNavigator };
