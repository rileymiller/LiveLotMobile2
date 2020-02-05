import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';

import { render } from '@testing-library/react-native';
import { useNavigation } from '../hooks/useNavigation';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text testID="title">Home page</Text>
      <Button title="About page" onPress={() => navigation.navigate('About')} />
    </View>
  );
};

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
    Home,
    About,
    Location,
  },
  { initialRouteName: 'Home' },
);
const App = createAppContainer(AppNavigator);

function renderWithNavigation({ screens = {}, navigatorConfig = {} } = {}) {
  const AppNavigatorRender = createStackNavigator(
    {
      Home,
      About,
      Location,
      ...screens,
    },
    { initialRouteName: 'Home', ...navigatorConfig },
  );
  const AppRender = createAppContainer(AppNavigatorRender);
  return { ...render(<AppRender />), navigationContainer: App };
}

export { renderWithNavigation, Location, About, Home, App, AppNavigator };
