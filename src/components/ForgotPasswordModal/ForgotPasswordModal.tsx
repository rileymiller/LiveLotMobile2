import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'

type Props = {
  isDisplayed: boolean
  closeModal: () => void
}

const ForgotPasswordModal = (props: Props) => {
  return (
    <Overlay
      isVisible={props.isDisplayed}
      onBackdropPress={props.closeModal}
      overlayBackgroundColor={colors.backgroundPrimaryColor}
      overlayStyle={{
        borderRadius: spacing.xxs,
        flex: .5,

        alignItems: 'center'
      }}
    >
      <Text
        style={styles.forgotPasswordTitle}
        testID={'forgot-password-modal'}
      >Forgot Password</Text>
    </Overlay>
  )
}

const styles = StyleSheet.create({
  forgotPasswordTitle: {
    fontSize: spacing.m,
    fontWeight: '600',
    color: colors.textPrimaryColor,
    marginTop: spacing.s
  }
})
export default ForgotPasswordModal