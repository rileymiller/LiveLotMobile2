import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';

import { render } from '@testing-library/react-native';
import { useNavigation } from '../../hooks/useNavigation';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

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
    LoginScreen,
    HomeScreen,
    About,
  },
  { initialRouteName: 'LoginScreen' },
);
const App = createAppContainer(AppNavigator);

function renderWithNavigation({ screens = {}, navigatorConfig = {} } = {}) {
  const AppNavigatorRender = createStackNavigator(
    {
      LoginScreen,
      HomeScreen,
      About,
      ...screens,
    },
    { initialRouteName: 'LoginScreen', ...navigatorConfig },
  );
  const AppRender = createAppContainer(AppNavigatorRender);
  return { ...render(<AppRender />), navigationContainer: App };
}

export { renderWithNavigation, About, App, AppNavigator };
