import React from 'react'
import { useState } from 'react'
import { Text, StyleSheet, ScrollView, View, TouchableWithoutFeedback } from 'react-native'

import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from 'colors/colors'
import { useNavigation } from '@react-navigation/native'
import { spacing } from 'spacing/spacing'

const SignupForm = () => {

  const navigation = useNavigation()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')


  const [emailError, setEmailError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false)


  const updateEmail = (email: string) => {
    setEmail(email)
    setEmailError(false)
  }

  const updatePassword = (password: string) => {
    setPassword(password)
    setPasswordError(false)
  }

  const updateConfirmPassword = (password: string) => {
    setConfirmPassword(password)
    setConfirmPasswordError(false)
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

    if (password !== confirmPassword) {
      setConfirmPasswordError(true)
      return
    }

    if (!confirmPassword?.length) {
      setConfirmPasswordError(true)
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
          testID={'signup-email-input'}
          accessibilityLabel={'Email'}
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
          testID={'signup-password-input'}
          accessibilityLabel={'Password'}
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
          errorMessage={passwordError ? 'Please enter a valid password' : ''}
        />
        <Input
          label={'Confirm Password'}
          placeholder={'Confirm Password'}
          testID={'signup-confirm-password-input'}
          accessibilityLabel={'Confirm Password'}
          containerStyle={{ marginTop: spacing.s }}
          labelStyle={{ color: colors.textPrimaryColor }}
          placeholderTextColor={colors.textPrimaryColor}
          onChangeText={updateConfirmPassword}
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
          errorMessage={confirmPasswordError ? 'Please enter a valid password' : ''}
        />
        <Button
          title={'Signup'}
          accessibilityLabel={'Signup Button'}
          containerStyle={{ marginTop: spacing.xs, alignSelf: 'stretch' }}
          buttonStyle={{ backgroundColor: colors.buttonPrimaryColor }}
          titleStyle={{ color: colors.buttonTextPrimaryColor }}
          onPress={() => { validateForm() }}
        />
        <Button
          titleStyle={styles.forgotPassword}
          title={'Forgot Password?'}
          buttonStyle={{ backgroundColor: 'transparent' }}
          onPress={() => { navigation.navigate('ResetPasswordScreen') }}
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
    alignItems: 'center',
    // alignContent: 'center',
    justifyContent: 'center',
  },
  signupLinkContainer: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  forgotPassword: {
    fontSize: spacing.s,
    color: colors.textPrimaryColor,
    // alignSelf: 'center',
    textDecorationLine: 'underline',
    marginTop: spacing.xxs
  },
})

export default SignupForm