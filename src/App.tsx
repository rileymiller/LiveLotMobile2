// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import {
//   createAppContainer,
//   // NavigationParams,
//   // NavigationScreenProp,
//   // NavigationState,
//   // NavigationInjectedProps,
//   // withNavigation,
// } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { useNavigation } from '../hooks/useNavigation';

// import { render } from '@testing-library/react-native';

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text testID="title">Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// };

// const DetailsScreen = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// };

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   },
// );

// const AppContainer = createAppContainer(RootStack);

// const AppView = () => {
//   return (
//     <>
//       <AppContainer />
//     </>
//   );
// };

// function renderWithNavigation({ screens = {}, navigatorConfig = {} } = {}) {
//   const AppNavigator = createStackNavigator(
//     {
//       HomeScreen,
//       DetailsScreen,
//       ...screens,
//     },
//     { initialRouteName: 'Home', ...navigatorConfig },
//   );

//   const App = createAppContainer(AppNavigator);

//   return { ...render(<App />), navigationContainer: App };
// }

// export { renderWithNavigation, HomeScreen, DetailsScreen };
// export default AppView;
import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';

import { render } from '@testing-library/react-native';
// import { useNavigation } from 'hooks/useNavigation';

import { useContext } from 'react';
import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationContext,
} from 'react-navigation';

export function useNavigation<Params>() {
  return useContext(NavigationContext) as NavigationScreenProp<
    NavigationRoute,
    Params
  >;
}

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
