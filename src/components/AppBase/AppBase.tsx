import React from 'react';
import { useState, useEffect } from 'react'
import { AppState } from 'state/types'

import { AsyncStorage } from 'react-native';
import { Provider, useSelector, useStore } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'screens/SplashScreen/SplashScreen';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import LoginScreen from 'screens/LoginScreen/LoginScreen';
import SignupScreen from 'screens/SignupScreen/SignupScreen';
import BackToSplashScreenButton from 'components/BackToSplashScreenButton/BackToSplashScreenButton'
import ResetPasswordScreen from 'screens/ResetPasswordScreen/ResetPasswordScreen'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { colors } from 'colors/colors'

type RootStackParamList = {
  LoginScreen: undefined,
  SplashScreen: undefined,
  ResetPasswordScreen: undefined,
  SignupScreen: undefined,
  HomeScreen: undefined
};

const Stack = createStackNavigator<RootStackParamList>()

// const Navigation = createAppContainer(AppNavigator);
// const serverURL = "http://localhost:3000"
const AppBase = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const isSignedIn = useSelector((state: AppState) => state.authenticate.isSignedIn)
  console.log(isSignedIn)
  // const getToken = () => {
  //   let userToken
  //   try {
  //     userToken = AsyncStorage.getItem('userToken')
  //   } catch (e) {
  //     console.error(e)
  //   }
  //   return userToken
  // }

  useEffect(() => {
    // try to restore token from Async Storage, if token is restored, redirect to homescreen

    // socket example
    //   const socket = io(serverURL, {
    //     transportOptions: {
    //       polling: {
    //         extraHeaders: {
    //           token: getToken()
    //         }
    //       }
    //     }
    //   })
    //   socket.on("HELLO", (data: any) => console.log('received payload', data))

  }, [])

  const defaultNavigationOptions: StackNavigationOptions = {
    title: '',
    headerBackTitle: 'Back',
    headerStyle: {
      backgroundColor: colors.backgroundPrimaryColor
    },
    headerTitleStyle: {
      color: colors.textPrimaryColor,
      fontWeight: 'bold'
    },
    headerRight: () => null,
  }
  // console.log(isSignedIn)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={defaultNavigationOptions}>
        {!isSignedIn ? (
          <>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}

            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{
                animationTypeForReplace: !isSignedIn ? 'pop' : 'push',
              }}
            />
            <Stack.Screen
              name="SignupScreen"
              component={SignupScreen}
              options={{
                animationTypeForReplace: !isSignedIn ? 'pop' : 'push',
              }}
            />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
              options={{
                animationTypeForReplace: !isSignedIn ? 'pop' : 'push',
              }}
            />
          </>
        ) : (
            <>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  animationTypeForReplace: !isSignedIn ? 'pop' : 'push',
                }}
              />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { RootStackParamList }
export default AppBase