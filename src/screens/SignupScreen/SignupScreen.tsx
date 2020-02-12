import React from 'react'
import { View, Text } from 'react-native'

import SignupForm from 'components/SignupForm/SignupForm'
import { copyRightStyles } from 'screens/SplashScreen/SplashScreen'
import { useNavigation } from 'hooks/useNavigation'
import { colors } from 'colors/colors'

const SignupScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundPrimaryColor }}>
      <SignupForm />
      <Text style={copyRightStyles.copyRight}>© 2020 LiveLot LLC All Rights Reserved</Text>

    </View>
  )
}

export default SignupScreen