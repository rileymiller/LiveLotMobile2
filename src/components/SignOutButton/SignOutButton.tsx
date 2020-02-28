import React from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { signOut } from 'state/auth/actions'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'

const SignOutButton = () => {

  const dispatch = useDispatch()
  return (
    <View style={{ marginRight: spacing.s }}>
      <Icon
        name='exit-to-app'
        testID={'home-sign-out'}
        size={spacing.m}
        color={colors.textPrimaryColor}
        onPress={() => dispatch(signOut('', false))}
      />
    </View>
  )
}


export default SignOutButton