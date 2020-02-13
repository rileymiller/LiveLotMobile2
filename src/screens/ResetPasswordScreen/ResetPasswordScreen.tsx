import React from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'

import ResetPasswordForm from 'components/ResetPasswordForm/ResetPasswordForm'
import { copyRightStyles } from 'screens/SplashScreen/SplashScreen'
import { useNavigation } from 'hooks/useNavigation'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
import Icon from 'react-native-vector-icons/FontAwesome'

import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation'

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

const ResetPasswordScreen = () => {
  const navigation = useNavigation()

  return (
    <KeyboardAvoidingView style={styles.screenContainer} behavior='padding'>
      <ResetPasswordForm></ResetPasswordForm>
      <Text style={copyRightStyles.copyRight}>© 2020 LiveLot LLC All Rights Reserved</Text>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.backgroundPrimaryColor
  }
})

ResetPasswordScreen['navigationOptions'] = ({
  navigation,
}: {
  navigation: Navigation;
}) => ({
  title: 'Password Reset',
  headerLeft: () => {
    return (
      <Icon
        name='home'
        testID={'login-home'}
        size={spacing.m}
        color={colors.textPrimaryColor}
        style={{ marginLeft: spacing.xs }}
        onPress={() => navigation.navigate('SplashScreen')}
      />
    )
  }
})

export default ResetPasswordScreen