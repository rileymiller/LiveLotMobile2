import React from 'react'
import { useState } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { TokenAuthAction } from 'state/types'
import { signIn } from 'state/auth/actions'

import { Text, StyleSheet, ScrollView, View, TouchableWithoutFeedback } from 'react-native'
import { AppState } from 'state/types'
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from 'colors/colors'
import { useNavigation } from '@react-navigation/native'
import { spacing } from 'spacing/spacing'

const LoginForm = () => {

  const navigation = useNavigation()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [emailError, setEmailError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)


  const updateEmail = (email: string) => {
    setEmail(email)
    setEmailError(false)
  }

  const updatePassword = (password: string) => {
    setPassword(password)
    setPasswordError(false)
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

    navigation.navigate('HomeScreen')
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.keyboardContainer}>
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
          returnKeyType={'next'}
          returnKeyLabel={'Next'}
          onSubmitEditing={() => validateForm()}
          errorMessage={passwordError ? 'Please enter your password' : ''}
        />
        <Button
          title={'Login'}
          accessibilityLabel={'Login Button'}
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

const mapStateToProps = (state: AppState) => ({
  token: state.token,
  isLoading: state.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch<TokenAuthAction>) => ({
  login: (token: string, isLoading: boolean) => {
    dispatch(signIn(token, isLoading))
  }
})

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)