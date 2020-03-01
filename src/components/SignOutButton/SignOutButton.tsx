import React from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { signOut } from 'state/auth/auth-actions'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
import { signOut as clearToken } from 'api/authentication/AsyncStorageTokenAPI'

const SignOutButton = () => {

  const dispatch = useDispatch()

  const signOutAndClearToken = () => {
    dispatch(signOut('', false))
    clearToken()
  }
  return (
    <View style={{ marginRight: spacing.s }}>
      <Icon
        name='exit-to-app'
        testID={'home-sign-out'}
        size={spacing.m}
        color={colors.textPrimaryColor}
        onPress={() => signOutAndClearToken()}
      />
    </View>
  )
}


export default SignOutButton