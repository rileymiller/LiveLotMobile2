// jest.mock('NativeAnimatedHelper');
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    State: {},
    PanGestureHandler: View,
    BaseButton: View,
    Directions: {},
  };
});

// jest.mock('createStackNavigator', () => {});
jest.mock('react-navigation-stack', () => {
  return {
    createStackNavigator: jest.fn(),
  };
});

jest.mock('react-navigation', () => {
  return {
    createAppContainer: jest
      .fn()
      .mockReturnValue(function NavigationContainer(props) {
        return null;
      }),
    createDrawerNavigator: jest.fn(),
    createMaterialTopTabNavigator: jest.fn(),
    createStackNavigator: jest.fn(),
    StackActions: {
      push: jest
        .fn()
        .mockImplementation(x => ({ ...x, type: 'Navigation/PUSH' })),
      replace: jest
        .fn()
        .mockImplementation(x => ({ ...x, type: 'Navigation/REPLACE' })),
    },
    NavigationActions: {
      navigate: jest.fn().mockImplementation(x => x),
    },
  };
});

jest.mock('react-native-screens', () => {
  const RealComponent = jest.requireActual('react-native-screens');
  RealComponent.enableScreens = function() {};
  return RealComponent;
});
// jest.mock('NativeModules', () => ({
//   UIManager: {
//     RCTView: () => ({
//       directEventTypes: {},
//     }),
//   },
//   KeyboardObserver: {},
//   RNGestureHandlerModule: {
//     attachGestureHandler: jest.fn(),
//     createGestureHandler: jest.fn(),
//     dropGestureHandler: jest.fn(),
//     updateGestureHandler: jest.fn(),
//     State: {},
//     Directions: {},
//   },
// }));

console.warn = arg => {
  const warnings = [
    'Calling .measureInWindow()',
    'Calling .measureLayout()',
    'Calling .setNativeProps()',
    'Calling .focus()',
    'Calling .blur()',
  ];

  const finalArgs = warnings.reduce((acc, curr) => (arg.includes(curr) ? [...acc, arg] : acc),[]) // eslint-disable-line

  if (!finalArgs.length) {
    console.warn(arg);
  }
};
