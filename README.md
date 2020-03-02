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

Also will need to create a `.env` file at the root of your app. As of now, the only contents you need explicitly are:
```
SERVER_URL="http://localhost:3000"
```
this `SERVER_URL` will need to be set using environment variables at prod. Still gotta figure that out.
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
* `hooks/` this folder contains our custom React Hooks.
- `spacing/` this holds a spacing object that holds common values for spacing/sizes throughout our app. This will help us maintain a common look and feel throughout our app by using our `spacing` object.
- `images/` this folder holds all of our images that we are uptaking in our components.

In order to import one of these files we leverage absolute paths to avoid the nested nature of relative pathing. Example:
```
import { spacing } from 'spacing/spacing'
// vs.
import { spacing } from '../../../spacing'
```
Absolute paths are more declarative and easier to read than relative paths.

## Navigation
We leverage `react-navigation` to navigate between screens in our app. In the `AppBase` component we declare all of our screens and our HoC navigation components. We declare all of these navigation components a level below our root `App` component sos we can dynamically set the `StackNavigator` based on the `isSignedIn` value in our redux store. React navigation also exports a nifty `useNavigation` hook which allows us to uptake and manage navigation anywhere in our app. Example:
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

Need to catch up on a **lot** of test coverage after this push to get the app out. 🤒
Specifically need to test our API surface area, redux migration, and all of the HomeScreen, lot view, and websocket communication when we have a chance.
## API
In our app we uptake the `LiveLotAPI` which is a Node/MongoDB API that we use to communicate with all of the separate parts of our platform. In our mobile client we have created a service layer that we use to communicate with our API. The way that our API layer is structured is `src/api/<functionality_scope>/<file_name>.ts`, where we group all of our endpoints and types in the same folder for locality. Specifically when we uptake a new endpoint on the client we create both types for the DTO (Data Transfer Object), the endpoint, as well as a `<scope>API.ts` file which exports a promise for the endpoint. One of the nice things about dealing with promises is that it allows us to handle asyc requests with `async/await` and `try/catch` blocks which offers a higher level of specificity when handling errors.

 We handle all of our side effects directly in our component instead of in redux because frankly it was lower effort upfront. Will probably migrate our effects into redux in the future. Also will plan to consolidate all of these endpoints and types in some type of API manager abstraction to try and consolidate the imports.

 ## Redux
We decided to use `redux` in our app as a means to consolidate the complexity of our authentication logic as well as introducing the infrastructure for global state management as we continue to scale our app. So far we have two different stores that we use to keep track of our app's state: `authentication` and `lots`. The way that we keep organize our state management in our app is within the `state` directory in the `src` folder. Underneath the `state` folder we have three files that handle higher order state `store.ts`, `types.ts`, and `constants.ts` where `store` contains the declaration of the global store and uptake of the reducers. `types` holds all of our types for our state specific actions/state. Then, we declare our actions and reducers within a folder that is named after the scope that the actions/reducers are pertaining too (i.e. `state/auth/auth-actions.ts` and `state/auth/auth-reducer.ts`).

To uptake our actions within our components we leverage `useSelector` and `useDispatch` from `react-redux` where `useSelector` enables us to grab a part of the global store within our component and `useDispatch` is used to dispatch actions from our components.

Still need to test all of our redux state management.
## CI
Coming Soon
