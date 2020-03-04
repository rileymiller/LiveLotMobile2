import React from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
import { useNavigation } from '@react-navigation/native'


type Props = {
  size: number
}
const AppLogo: React.FC<Props> = ({ size }) => {

  return (
    <Icon
      name='airport-shuttle'
      testID={'app-logo'}
      size={size}
      color={colors.textPrimaryColor}
    />
  )
}

export default AppLogo