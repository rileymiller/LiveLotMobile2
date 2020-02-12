import React from 'react'
import { View, Text } from 'react-native'

import { copyRightStyles } from 'screens/SplashScreen/SplashScreen'
import LoginForm from 'components/LoginForm/LoginForm'
import { useNavigation } from 'hooks/useNavigation'

const LoginScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <LoginForm />
      <Text style={copyRightStyles.copyRight}>© 2020 LiveLot LLC All Rights Reserved</Text>
    </View>
  )
}


export default LoginScreen