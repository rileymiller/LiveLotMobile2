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
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
const About = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text testID="title">About page</Text>
      <Button title="About page" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};


const AppNavigator = createStackNavigator(
  {
    SplashScreen,
    HomeScreen,
    LoginScreen,
    SignupScreen,
    About,
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
      About,
      ...screens,
    },
    { initialRouteName: 'SplashScreen', ...navigatorConfig },
  );
  const AppRender = createAppContainer(AppNavigatorRender);
  return { ...render(<AppRender />), navigationContainer: App };
}

export { renderWithNavigation, About, App, AppNavigator };
