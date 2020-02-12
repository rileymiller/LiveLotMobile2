import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { copyRightStyles } from 'screens/SplashScreen/SplashScreen'
import { useNavigation } from 'hooks/useNavigation'
import { colors } from 'colors/colors'

const ResetPasswordScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.screenContainer}>
      <Text style={copyRightStyles.copyRight}>© 2020 LiveLot LLC All Rights Reserved</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.backgroundPrimaryColor
  }
})

export default ResetPasswordScreen