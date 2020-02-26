import React from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'

import ResetPasswordForm from 'components/ResetPasswordForm/ResetPasswordForm'
import CopyRightFooter from 'components/CopyRightFooter/CopyRightFooter'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'components/App/App'
import { colors } from 'colors/colors'
import BackToSplashScreenButton from 'components/BackToSplashScreenButton/BackToSplashScreenButton'


type SignupScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'SignupScreen'
>;

type Props = {
  navigation: SignupScreenNavigationProps
}

const ResetPasswordScreen: React.FC<Props> = ({ navigation }) => {
  navigation.setOptions({
    headerLeft: () => (
      <BackToSplashScreenButton />
    ),
    title: 'InsertLogo'
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