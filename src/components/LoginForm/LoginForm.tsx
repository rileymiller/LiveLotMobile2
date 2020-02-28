import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from 'api/authentication/LoginAPI'
import { storeToken } from 'api/authentication/AsyncStorageTokenAPI'
import { checkToken } from 'api/authentication/CheckTokenAPI'
import { signIn } from 'state/auth/actions'
import { StyleSheet, ScrollView, View, Keyboard } from 'react-native'
import ErrorToast from 'components/ErrorToast/ErrorToast'
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from 'colors/colors'
import { useNavigation } from '@react-navigation/native'
import { spacing } from 'spacing/spacing'
import { XOutboundLogin } from 'api/authentication/XOutboundToken'

const LoginForm = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [emailError, setEmailError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [serverError, setServerError] = useState<string>('')
  const updateEmail = (email: string) => {
    setEmail(email)
    setEmailError(false)
    setServerError('')
  }

  const updatePassword = (password: string) => {
    setPassword(password)
    setPasswordError(false)
    setServerError('')
  }



  const validateForm = () => {
    if (!email?.length) {
      setEmailError(true)
      return false
    }

    if (!password?.length) {
      setPasswordError(true)
      return false
    }

    return true
  }

  const submitForm = async () => {
    if (!validateForm()) {
      return
    }
    await Keyboard.dismiss()
    try {
      setIsLoading(true)

      const response: XOutboundLogin = await login(email, password)

      const { token } = response

      try {
        const user = await checkToken(token)
        console.log(user)

        await dispatch(signIn(token, user, true))

        await storeToken(token)

        setServerError('')
        setIsLoading(false)

      } catch (e) {
        setServerError(e.message)
        setIsLoading(false)
        console.log(e)
      }

    } catch (e) {
      console.log('ERROR: ', e.message)
      await Keyboard.dismiss()
      setServerError(e.message)
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <ErrorToast error={serverError} setError={setServerError} />
      <ScrollView contentContainerStyle={styles.keyboardContainer} keyboardShouldPersistTaps={'handled'}>
        <Input
          label={'Enter Email'}
          placeholder={'Email'}
          testID={'login-email-input'}
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
          returnKeyType={'go'}
          returnKeyLabel={'Submit'}
          onSubmitEditing={() => submitForm()}
          errorMessage={passwordError ? 'Please enter your password' : ''}
        />
        <Button
          title={'Login'}
          accessibilityLabel={'Login Button'}
          loading={isLoading}
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
          title='Signup'
          iconRight={true}
          icon={
            <Icon
              name={'angle-double-right'}
              size={spacing.m}
              color={colors.textPrimaryColor}
              style={{ marginLeft: spacing.xs }}
            />
          }
          accessibilityLabel={'Signup button'}
          onPress={() => { navigation.navigate('SignupScreen') }}
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
    justifyContent: 'center',
  },
  signupLinkContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  forgotPassword: {
    fontSize: spacing.s,
    color: colors.textPrimaryColor,
    textDecorationLine: 'underline',
    marginTop: spacing.xxs
  },
})

export default LoginForm