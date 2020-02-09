import React from 'react'
import { View, Text } from 'react-native'

import { useNavigation } from 'hooks/useNavigation'
import { colors } from 'colors/colors'

const SignupScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundPrimaryColor }}>
      <Text>
        Signup bitches
      </Text>
    </View>
  )
}

export default SignupScreen