import * as React from 'react';
import { Button, View, Text } from 'react-native';
import {
  createAppContainer,
  // NavigationParams,
  // NavigationScreenProp,
  // NavigationState,
  // NavigationInjectedProps,
  // withNavigation,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { useNavigation } from '../hooks/useNavigation';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text testID="title">Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
};

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);

const AppView = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};
export default AppView;

// function renderWithNavigation({ screens = {}, navigatorConfig = {} } = {}) {
//   const AppNavigator = createStackNavigator(
//     {
//       Home,
//       About,
//       Location,
//       ...screens,
//     },
//     { initialRouteName: 'Home', ...navigatorConfig },
//   );

//   const App = createAppContainer(AppNavigator);

//   return { ...render(<App />), navigationContainer: App };
// }

// export { renderWithNavigation, Home, About, Location, LocationDisplay };
