import React from 'react'
import { View, Text } from 'react-native'

import SignupForm from 'components/SignupForm/SignupForm'
import { copyRightStyles } from 'screens/SplashScreen/SplashScreen'
import { useNavigation } from 'hooks/useNavigation'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
import Icon from 'react-native-vector-icons/FontAwesome'

import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation'

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

const SignupScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundPrimaryColor }}>
      <SignupForm />
      <Text style={copyRightStyles.copyRight}>© 2020 LiveLot LLC All Rights Reserved</Text>

    </View>
  )
}

SignupScreen['navigationOptions'] = ({
  navigation,
}: {
  navigation: Navigation;
}) => ({
  title: 'Mines Lots',
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

export default SignupScreen