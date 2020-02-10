import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';

import { render } from '@testing-library/react-native';
import { useNavigation } from 'hooks/useNavigation';
import SplashScreen from 'screens/SplashScreen/SplashScreen';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import LoginScreen from 'screens/LoginScreen/LoginScreen';
import SignupScreen from 'screens/SignupScreen/SignupScreen';

const AppNavigator = createStackNavigator(
  {
    SplashScreen,
    HomeScreen,
    LoginScreen,
    SignupScreen,
  },
  { initialRouteName: 'SplashScreen' },
);
const App = createAppContainer(AppNavigator);

function renderWithNavigation({ screens = {}, navigatorConfig = {} } = {}) {
  const AppNavigatorRender = createStackNavigator(
    {
      SplashScreen,
      HomeScreen,
      LoginScreen,
      SignupScreen,
      ...screens,
    },
    { initialRouteName: 'SplashScreen', ...navigatorConfig },
  );
  const AppRender = createAppContainer(AppNavigatorRender);
  return { ...render(<AppRender />), navigationContainer: App };
}

export { renderWithNavigation, App, AppNavigator };
