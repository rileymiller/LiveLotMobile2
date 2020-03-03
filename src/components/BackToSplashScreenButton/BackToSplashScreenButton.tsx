import React from 'react'

import { Icon } from 'react-native-elements'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

const BackToSplashScreenButton = () => {

  const navigation = useNavigation()

  return (
    <View style={{ paddingLeft: spacing.s }}>
      <Icon
        name='home'
        testID={'login-home'}
        size={spacing.m}
        color={colors.textPrimaryColor}
        onPress={() => navigation.navigate('SplashScreen')}
      />
    </View>
  )
}

export default BackToSplashScreenButton