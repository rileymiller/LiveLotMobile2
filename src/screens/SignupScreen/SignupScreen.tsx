import React from 'react'
import { KeyboardAvoidingView, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'components/AppBase/AppBase'
import SignupForm from 'components/SignupForm/SignupForm'
import CopyRightFooter from 'components/CopyRightFooter/CopyRightFooter'
import { colors } from 'colors/colors'
import BackToSplashScreenButton from 'components/BackToSplashScreenButton/BackToSplashScreenButton'
import AppLogo from 'components/AppLogo/AppLogo'
import { spacing } from 'spacing/spacing'


type SignupScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'SignupScreen'
>;

type Props = {
  navigation: SignupScreenNavigationProps
}

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  navigation.setOptions({
    title: 'InsertLogo',
    headerLeft: () => (
      <BackToSplashScreenButton />
    ),
    headerTitle: () => (
      <AppLogo size={spacing.l} />
    )
  });

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.backgroundPrimaryColor }} behavior="padding">
      <SignupForm />
      <CopyRightFooter />
    </KeyboardAvoidingView>
  )
}

export default SignupScreen