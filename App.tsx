import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

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
