import React from 'react';
import { useEffect } from 'react'
import { AppState } from 'state/types'

import { useSelector, useDispatch, useStore } from 'react-redux'
import { checkToken } from 'api/authentication/CheckTokenAPI'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'screens/SplashScreen/SplashScreen';
import { isLoading as isLoadingAction, doneLoading } from 'state/loading/loading-actions'
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import LoginScreen from 'screens/LoginScreen/LoginScreen';
import SignupScreen from 'screens/SignupScreen/SignupScreen';
import ResetPasswordScreen from 'screens/ResetPasswordScreen/ResetPasswordScreen'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { colors } from 'colors/colors'
import { signIn } from 'state/auth/auth-actions'
import { getToken, storeToken } from 'api/authentication/AsyncStorageTokenAPI';

type RootStackParamList = {
  LoginScreen: undefined,
  SplashScreen: undefined,
  ResetPasswordScreen: undefined,
  SignupScreen: undefined,
  HomeScreen: undefined
};

const Stack = createStackNavigator<RootStackParamList>()

const AppBase = () => {
  const isSignedIn = useSelector((state: AppState) => state.authenticate.isSignedIn)
  // const isLoading = useSelector((state: AppState) => state.loading.isLoading)
  const dispatch = useDispatch()
  useEffect(() => {
    // try to restore token from Async Storage, if token is restored, redirect to homescreen
    const loadTokenFromStorage = async () => {


      try {
        const token = await getToken()
        console.log('token: ', token)
        try {

          const user = await checkToken(token)
          console.log('user after getToken', user)

          // console.log('about to dispatch isLoading action')
          // dispatch(isLoadingAction())
          await dispatch(signIn(token, user, true))
          // await storeToken(token)

          // console.log('about to dispatch done Loading Action')
          // dispatch(doneLoading())
        } catch (e) {
          console.log('Error authenticating token on server', e)
        }


      } catch (e) {
        console.log('Error loading token from storage', e)
      }
    }
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
    loadTokenFromStorage()
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
                  animationTypeForReplace: 'pop'
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