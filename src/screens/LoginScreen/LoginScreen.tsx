import React from 'react'
import { View } from 'react-native'

import LoginForm from 'components/LoginForm/LoginForm'
import { useNavigation } from 'hooks/useNavigation'

const LoginScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <LoginForm />
    </View>
  )
}

export default LoginScreen