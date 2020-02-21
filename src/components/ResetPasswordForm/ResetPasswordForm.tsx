import React from 'react'
import { useState } from 'react'
import { Text, StyleSheet, ScrollView, View } from 'react-native'

import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from 'colors/colors'
import { useNavigation } from 'hooks/useNavigation'
import { spacing } from 'spacing/spacing'

const ResetPasswordForm = () => {

  const navigation = useNavigation()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('')

  const [emailError, setEmailError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [newPasswordError, setNewPasswordError] = useState<boolean>(false)
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState<boolean>(false)

  const updateEmail = (email: string) => {
    setEmail(email)
    setEmailError(false)
  }

  const updatePassword = (password: string) => {
    setPassword(password)
    setPasswordError(false)
  }

  const updateNewPassword = (newPassword: string) => {
    setNewPassword(newPassword)
    setNewPasswordError(false)
  }

  const updateConfirmNewPassword = (confirmNewPassword: string) => {
    setConfirmNewPassword(confirmNewPassword)
    setConfirmNewPasswordError(false)
  }

  const validateForm = () => {
    if (!email?.length) {
      setEmailError(true)
      return
    }

    if (!password?.length) {
      setPasswordError(true)
      return
    }

    if (!newPassword?.length) {
      setNewPasswordError(true)
      return
    }

    if (!confirmNewPassword?.length) {
      setConfirmNewPasswordError(true)
      return
    }

    navigation.navigate('HomeScreen')
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.keyboardContainer}>
        <Input
          label={'Enter Email'}
          placeholder={'Email'}
          labelStyle={{ color: colors.textPrimaryColor }}
          placeholderTextColor={colors.textPrimaryColor}
          onChangeText={updateEmail}
          keyboardType={'default'}
          leftIcon={
            <Icon
              name={'envelope'}
              size={spacing.s + spacing.xxxs}
              color={colors.textPrimaryColor}
              style={{ marginRight: spacing.xs }}
            />
          }
          returnKeyType={'next'}
          returnKeyLabel={'Next'}
          onSubmitEditing={() => validateForm()}
          errorMessage={emailError ? 'Please enter a valid email' : ''}
        />
        <Input
          label={'Enter Password'}
          placeholder={'Password'}
          containerStyle={{ marginTop: spacing.s }}
          labelStyle={{ color: colors.textPrimaryColor }}
          placeholderTextColor={colors.textPrimaryColor}
          onChangeText={updatePassword}
          keyboardType={'default'}
          secureTextEntry
          leftIcon={
            <Icon
              name={'lock'}
              size={spacing.s + spacing.xxs}
              color={colors.textPrimaryColor}
              style={{ marginRight: spacing.xs }}
            />
          }
          returnKeyType={'next'}
          returnKeyLabel={'Next'}
          onSubmitEditing={() => validateForm()}
          errorMessage={passwordError ? 'Please enter your password' : ''}
        />
        <Input
          label={'Enter New Password'}
          placeholder={'New Password'}
          containerStyle={{ marginTop: spacing.s }}
          labelStyle={{ color: colors.textPrimaryColor }}
          placeholderTextColor={colors.textPrimaryColor}
          onChangeText={updateNewPassword}
          secureTextEntry
          keyboardType={'default'}
          leftIcon={
            <Icon
              name={'lock'}
              size={spacing.s + spacing.xxs}
              color={colors.textPrimaryColor}
              style={{ marginRight: spacing.xs }}
            />
          }
          returnKeyType={'next'}
          returnKeyLabel={'Next'}
          onSubmitEditing={() => validateForm()}
          errorMessage={newPasswordError ? 'Please enter a valid password' : ''}
        />
        <Input
          label={'Confirm Password'}
          placeholder={'Confirm Password'}
          containerStyle={{ marginTop: spacing.s }}
          labelStyle={{ color: colors.textPrimaryColor }}
          placeholderTextColor={colors.textPrimaryColor}
          onChangeText={updateConfirmNewPassword}
          secureTextEntry
          keyboardType={'default'}
          leftIcon={
            <Icon
              name={'lock'}
              size={spacing.s + spacing.xxs}
              color={colors.textPrimaryColor}
              style={{ marginRight: spacing.xs }}
            />
          }
          returnKeyType={'go'}
          returnKeyLabel={'Submit'}
          onSubmitEditing={() => validateForm()}
          errorMessage={confirmNewPasswordError ? 'Please enter a valid password' : ''}
        />
        <Button
          title={'Reset Password'}
          containerStyle={{ marginTop: spacing.xs }}
          buttonStyle={{ backgroundColor: colors.buttonPrimaryColor }}
          titleStyle={{ color: colors.buttonTextPrimaryColor }}
          onPress={() => { validateForm() }}
        />
      </ScrollView>
      <View style={styles.signupLinkContainer}>
        <Button
          containerStyle={{ marginBottom: spacing.xs }}
          buttonStyle={{ backgroundColor: 'transparent' }}
          titleStyle={{ color: colors.textPrimaryColor }}
          title='Login'
          icon={
            <Icon
              name={'angle-double-left'}
              size={spacing.m}
              color={colors.textPrimaryColor}
              style={{ marginRight: spacing.xs }}
            />
          }
          accessibilityLabel={'Login button'}
          onPress={() => { navigation.navigate('LoginScreen') }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: spacing.xs
  },
  keyboardContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  signupLinkContainer: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})

export default ResetPasswordForm