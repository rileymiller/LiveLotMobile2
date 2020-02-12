import React from 'react'
import { View, Text } from 'react-native'

import SignupForm from 'components/SignupForm/SignupForm'
import { useNavigation } from 'hooks/useNavigation'
import { colors } from 'colors/colors'

const SignupScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundPrimaryColor }}>
      <SignupForm />
    </View>
  )
}

export default SignupScreen