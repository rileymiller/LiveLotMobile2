# LiveLotMobile v2 🦋

**Welcome to LiveLotMobile the Sequel!**

This application is built on React Native v0.61.5! ⚛ We decided to use React Native in order for us to create a cross-platform application with velocity as well as allowing us to only manage one code base.

## Development
In order to remain consistent across development machines and to reduce the pain of managing dependencies, ensure that your machine is running the following:

* `Xcode: 11.3.1`
* `MacOS: Mojave 10.14.6`
* `Android Studio: Version 3.5`
* `react-native-cli: managed by npx`
* `node: v12.12.0`
* `yarn: 1.19.1`
* `npx: 6.13.6`
* `watchman: 4.9.0`
* `plop: 2.5.3`

Developing with common environments will help us to remain consistent across machines and ensure that we don't introduce descrepancies between environments. Also, due to the nature of React Native leveraging "Native" development tools, we can't dockerize our app to mitigate this issue 😔.

## Scaffolding
In order to maintain our codebase we will use a tool called `plop` to create new components (https://plopjs.com/documentation/). This tool currently supports both `screens` and `components` generators which will allow you to automagically create all of the relevant scaffolding, file names, and populate the necessary files to create new screens and components in our app. To get started install plop: 
```
npm install plop -g
```
Then when creating a new component just run: 
```
yarn plop
```
and answer the following prompts. This will generate a corresponding screen or component under the path `src/screens/<(screen_name|component_name)>/` with a TypeScript component file `(screen_name|component_name).tsx` and a Typescript test file `(screen_name|component_name).test.tsx`. When creating new test files on your own, ensure that the file has the extension `.test.tsx` so that `jest` can find and run the test suite. Under the hood `plop` leverages a `plopfile.js` to create new generators and manage the scaffolding within our project as well as handlebars templates located in `plop-templates/`.

At a high level all of our app's source code should live within the `src/` folder. In addition to `screens/` and `components/` we also have additional scaffolding to maintain common code throughout our app:
* `authentication/`: contains app authentication files
* `colors/`: contains our app's global styles. Inside of `colors.ts` we have color constants as well as a `colors` object that holds common styles so we can make global style changes in one place vs. changing styles in every file in our app. When styling components you **MUST** utilize this file in order for us to maintain our styles as we continue to scale. Example of uptaking colors below:
```
import React from 'react'
import { Text } from 'react-native
import { colors } from 'colors/colors'

const MyComponent = () => {
  return (
    <Text style={{ backgroundColor: colors.backgroundPrimaryColor, color: colors.textPrimaryColor}} />
  )
}

export default MyComponent
```
* `hooks/` this folder contains our custom React Hooks. The most important hook in there right now is our `useNavigation` hook which allows us to uptake and manage navigation anywhere in our app. Example:
```
import React from 'react'
import { Text } from 'react-native
import { colors } from 'colors/colors'
import { useNavigation } from '@react-navigation/native'
const MyComponent = () => {
  const navigation = useNavigation()
  return (
    <Text 
      style={{ 
        backgroundColor: colors backgroundPrimaryColor, color: colors.textPrimaryColor
      }}
      onPress={
        () => navigation.navigate('Home')
      }
    />
  )
}

export default MyComponent
```
- `spacing/` this holds a spacing object that holds common values for spacing/sizes throughout our app. This will help us maintain a common look and feel throughout our app by using our `spacing` object.
- `images/` this folder holds all of our images that we are uptaking in our components.

In order to import one of these files we leverage absolute paths to avoid the nested nature of relative pathing. Example:
```
import { spacing } from 'spacing/spacing'
// vs.
import { spacing } from '../../../spacing'
```
Absolute paths are more declarative and easier to read than relative paths.

## Testing
Right now we are leveraging `@testing-library/react-native` as our unit/integration testing framework. The primary paradigm behind this library is that you should test your app the way the user interacts with it versus testing for component internals. They have a great set of docs on their website to reference while you're writing tests: https://www.native-testing-library.com/docs/intro.

In addition to `@testing-library/react-native` we are using `jest` as our test runner and to manage our mocks. Whenever you are testing a component and the behavior invokes an API call, make sure that you stub the function call with a mock since unit/integration test should run in isolotation. Jest has a lot of examples on their website on writing mocks (https://jestjs.io/docs/en/getting-started), I've also attached some relevant articles below:
* https://kentcdodds.com/blog/the-merits-of-mocking
* https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c

A useful trick for developing is whenever you're introducing functionality, run: 
```
yarn jest --watch
```
to run `jest` in watch mode that way you can fix tests in real time while you're making changes.

## API
Coming Soon

## Conventional Commits
Coming Soon

## CI
Coming Soon
