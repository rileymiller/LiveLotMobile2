import React from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'

import ResetPasswordForm from 'components/ResetPasswordForm/ResetPasswordForm'
import CopyRightFooter from 'components/CopyRightFooter/CopyRightFooter'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'components/AppBase/AppBase'
import { colors } from 'colors/colors'
import BackToSplashScreenButton from 'components/BackToSplashScreenButton/BackToSplashScreenButton'
import AppLogo from 'components/AppLogo/AppLogo'
import { spacing } from 'spacing/spacing'

type LoginScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

type Props = {
  navigation: LoginScreenNavigationProps
}


const ResetPasswordScreen: React.FC<Props> = ({ navigation }) => {
  navigation.setOptions({
    headerLeft: () => (
      <BackToSplashScreenButton />
    ),
    headerTitle: () => (
      <AppLogo size={spacing.l} />
    )
  });

  return (
    <KeyboardAvoidingView style={styles.screenContainer} behavior='padding'>
      <ResetPasswordForm />
      <CopyRightFooter />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.backgroundPrimaryColor
  }
})

export default ResetPasswordScreen