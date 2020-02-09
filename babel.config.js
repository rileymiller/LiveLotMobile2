module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['@babel/plugin-proposal-optional-chaining',
    ['module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          screens: './src/screens',
          spacing: './src/spacing',
          colors: './src/colors',
          // navigation: './src/navigation',
          components: './src/components',
          hooks: './src/hooks',
          images: './src/images',
          authentication: './src/authentication'
          // state: './src/state',
        },
      }
    ],
  ],
};
