import React from 'react'
import { View, Text } from 'react-native'

import { useNavigation } from '../../hooks/useNavigation'

const SignupScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <Text>
        Signup bitches
      </Text>
    </View>
  )
}

export default SignupScreen