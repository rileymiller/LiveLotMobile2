import React from 'react'
import { Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { RootStackParamList } from 'components/AppBase/AppBase'
import CopyRightFooter from 'components/CopyRightFooter/CopyRightFooter'
import LoginForm from 'components/LoginForm/LoginForm'
import { StackNavigationProp } from '@react-navigation/stack'
import BackToSplashScreenButton from 'components/BackToSplashScreenButton/BackToSplashScreenButton'
import AppLogo from 'components/AppLogo/AppLogo'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'

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
    headerTitle: () => (
      <AppLogo size={spacing.l} />
    )
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