import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';

import { render } from '@testing-library/react-native';
import { useNavigation } from '../hooks/useNavigation';
import LoginScreen from './screens/LoginScreen';

const About = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text testID="title">About page</Text>
      <Button title="About page" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const Location = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text testID="title">Location page</Text>
      <Text testID="location-display">{navigation.state.routeName}</Text>
    </View>
  );
};

const AppNavigator = createStackNavigator(
  {
    LoginScreen,
    About,
    Location,
  },
  { initialRouteName: 'LoginScreen' },
);
const App = createAppContainer(AppNavigator);

function renderWithNavigation({ screens = {}, navigatorConfig = {} } = {}) {
  const AppNavigatorRender = createStackNavigator(
    {
      LoginScreen,
      About,
      Location,
      ...screens,
    },
    { initialRouteName: 'LoginScreen', ...navigatorConfig },
  );
  const AppRender = createAppContainer(AppNavigatorRender);
  return { ...render(<AppRender />), navigationContainer: App };
}

export {
  renderWithNavigation,
  Location,
  About,
  LoginScreen,
  App,
  AppNavigator,
};
