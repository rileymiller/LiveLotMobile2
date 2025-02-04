module.exports = {
  preset: '@testing-library/react-native',
  // transform: {
  //   '\\.(ts|tsx)$': 'ts-jest',
  // },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
      babelConfig: 'babel.config.js',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    // 'node_modules/(?!(jest-)?react-native|react-navigation)',
    '/node_modules/(?!react-native|react-clone-referenced-element|react-navigation|@react-native-community|@react-navigation)',
    // 'node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform)',
    // 'node_modules/(?!react-native|react-navigation|react-native-screens|react-native-gesture-handler|react-native-animatable|react-native-vector-icons)/',
    // 'node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|sentry-expo|native-base))',
    // 'node_modules/(?!(react-native|LiveLotMobile2|react-native-button)/)',
    // 'node_modules/react-navigation/',
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
};
