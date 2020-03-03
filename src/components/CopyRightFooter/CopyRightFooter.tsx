import React from 'react'
import { Text, StyleSheet } from 'react-native'

import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'

const CopyRightFooter = () => {

  return (
    <Text style={copyRightStyles.copyRight}>© 2020 LiveLot LLC All Rights Reserved</Text>
  )
}

const copyRightStyles = StyleSheet.create({
  copyRight: {
    alignSelf: 'stretch',
    backgroundColor: colors.backgroundPrimaryColor,
    textAlign: 'center',
    color: colors.textPrimaryColor,
    paddingBottom: spacing.xs
  }
})

export default CopyRightFooter