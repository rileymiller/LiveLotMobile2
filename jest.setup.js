jest.mock('NativeAnimatedHelper').mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    State: {},
    PanGestureHandler: View,
    BaseButton: View,
    Directions: {},
  };
});

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
