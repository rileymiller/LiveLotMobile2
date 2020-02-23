import React from 'react'
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'

import { copyRightStyles } from 'screens/SplashScreen/SplashScreen'
import LoginForm from 'components/LoginForm/LoginForm'
import { useNavigation } from 'hooks/useNavigation'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
import Icon from 'react-native-vector-icons/FontAwesome'

import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation'

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

const LoginScreen = () => {
  const navigation = useNavigation()
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <LoginForm />
      <Text style={copyRightStyles.copyRight}>© 2020 LiveLot LLC All Rights Reserved</Text>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimaryColor
  }
})

LoginScreen['navigationOptions'] = ({
  navigation,
}: {
  navigation: Navigation;
}) => ({
  title: 'LiveLot',
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

export default LoginScreen