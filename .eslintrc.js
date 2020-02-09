module.exports = {
  root: true,
  // extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: module,
    ecmaFeatures: {
      modules: true
    }
  },
  plugins: ['@typescript-eslint', 'jest'],
};
