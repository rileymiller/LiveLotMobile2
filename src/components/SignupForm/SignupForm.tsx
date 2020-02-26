import React from 'react'
import { useState } from 'react'
import { Text, StyleSheet, ScrollView, View, TouchableWithoutFeedback } from 'react-native'

import { signup } from 'api/authentication/SignupAPI'
import { XOutboundAuthError, XOutboundToken } from 'api/authentication/XOutboundToken'

import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from 'colors/colors'
import { useNavigation } from '@react-navigation/native'
import { spacing } from 'spacing/spacing'
import ErrorToast from 'components/ErrorToast/ErrorToast'

const SignupForm = () => {

  const navigation = useNavigation()
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const [serverError, setServerError] = useState<string>('')

  const [emailError, setEmailError] = useState<boolean>(false)
  const [usernameError, setUsernameError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false)


  const updateEmail = (email: string) => {
    setEmail(email)
    setEmailError(false)
  }

  const updateUsername = (username: string) => {
    setUsername(username)
    setUsernameError(false)
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
      return false
    }

    if (!username?.length) {
      setUsernameError(true)
      return false
    }
    if (!password?.length) {
      setPasswordError(true)
      return false
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError(true)
      return false
    }

    if (!confirmPassword?.length) {
      setConfirmPasswordError(true)
      return false
    }

    return true
  }

  const submitForm = async () => {
    if (!validateForm()) {
      return
    }
    try {
      console.log('about to submit form')
      const response: XOutboundToken = await signup(email, username, password, confirmPassword)
      if ((response as XOutboundAuthError)?.statusCode) {
        // type guard for error
        setServerError((response as XOutboundAuthError)?.message ?? 'Server Error')
        return
      }

      // upon response of token, set isLoading to true
      // try to authenticate with token
      // if authenticated
      // call action creater to store token
      // set isLoading to false in store and drop auth screens at root

    } catch (e) {
      console.log('ERROR: ', e)
    }
  }

  return (
    <View style={styles.container}>
      <ErrorToast error={serverError} setError={setServerError} />
      <ScrollView contentContainerStyle={styles.keyboardContainer} keyboardShouldPersistTaps={'handled'}>
        <Input
          label={'Enter Email'}
          placeholder={'Email'}
          testID={'signup-email-input'}
          accessibilityLabel={'Email'}
          labelStyle={{ color: colors.textPrimaryColor }}
          placeholderTextColor={colors.textPrimaryColor}
          onChangeText={updateEmail}
          keyboardType={'email-address'}
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
          label={'Enter Username'}
          placeholder={'Username'}
          testID={'signup-username-input'}
          accessibilityLabel={'Username'}
          containerStyle={{ marginTop: spacing.s }}
          labelStyle={{ color: colors.textPrimaryColor }}
          placeholderTextColor={colors.textPrimaryColor}
          onChangeText={updateUsername}
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
          errorMessage={usernameError ? 'Please enter a valid username' : ''}
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
          onSubmitEditing={() => submitForm()}
          errorMessage={confirmPasswordError ? 'Please enter a valid, matching password' : ''}
        />
        <Button
          title={'Signup'}
          accessibilityLabel={'Signup Button'}
          containerStyle={{ marginTop: spacing.xs, alignSelf: 'stretch' }}
          buttonStyle={{ backgroundColor: colors.buttonPrimaryColor }}
          titleStyle={{ color: colors.buttonTextPrimaryColor }}
          onPress={() => { submitForm() }}
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