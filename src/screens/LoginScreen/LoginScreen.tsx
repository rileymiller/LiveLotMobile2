import React from 'react'
import { Text, KeyboardAvoidingView, StyleSheet } from 'react-native'

import { RootStackParamList } from 'components/App/App'
import CopyRightFooter from 'components/CopyRightFooter/CopyRightFooter'
import LoginForm from 'components/LoginForm/LoginForm'
import { StackNavigationProp } from '@react-navigation/stack'
import BackToSplashScreenButton from 'components/BackToSplashScreenButton/BackToSplashScreenButton'
import { colors } from 'colors/colors'

type LoginScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

type Props = {
  navigation: LoginScreenNavigationProps
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {

  navigation.setOptions({
    headerLeft: () => (
      <BackToSplashScreenButton />
    ),
    title: 'InsertLogo'
  });

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <LoginForm />
      <CopyRightFooter />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimaryColor
  }
})

export default LoginScreen