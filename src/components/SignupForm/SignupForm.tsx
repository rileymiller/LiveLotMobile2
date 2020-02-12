import React from 'react';
import { useState, useRef } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import { Button, Input, SocialIcon } from 'react-native-elements';


import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
import { useNavigation } from 'hooks/useNavigation'


const SignupForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false)


  const passwordInputRef = useRef<Input>(null);
  const confirmPasswordInputRef = useRef<Input>(null);
  const emailInputRef = useRef<Input>(null);

  const updateEmail = (email: String) => {
    setEmail(email.trim());
    setEmailError(false)
  }
  const updatePassword = (password: String) => {
    setPassword(password.trim());
    setPasswordError(false)
  }

  const updateConfirmPassword = (confirmPassword: string) => {
    setConfirmPassword(confirmPassword.trim())
    setConfirmPasswordError(false)
  }

  const navigation = useNavigation()

  const clearSignupForm = () => {
    passwordInputRef.current?.clear();
    emailInputRef.current?.clear();
    confirmPasswordInputRef.current?.clear();
    setPassword("");
    setConfirmPassword("")
    setEmail("");
    setPasswordError(false);
    setEmailError(false);
    setConfirmPasswordError(false)
  }

  const validateSignup = () => {
    debugger
    if (!email?.length) {
      setEmailError(true)
      emailInputRef.current?.shake()
      return
    }

    if (!password?.length) {
      setPasswordError(true)
      passwordInputRef.current?.shake()
      return
    }

    if (!confirmPassword?.length) {
      setConfirmPasswordError(true)
      confirmPasswordInputRef.current?.shake()
      return
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError(true)
      confirmPasswordInputRef.current?.shake()
      return
    }

    if (!emailError && !passwordError && !confirmPasswordError) {
      // clearSignupForm();
      navigation.navigate('HomeScreen')
    }
  }
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputGroupContainer}>
          <Input
            containerStyle={styles.inputContainer}
            label={'Email'}
            accessibilityLabel={'Email'}
            placeholder={'Enter Email'}
            returnKeyType={'next'}
            returnKeyLabel={'Next'}
            testID={'signup-email-input'}
            onSubmitEditing={() => { passwordInputRef.current?.focus() }}
            errorMessage={emailError ? 'Please enter your email' : ''}
            inputContainerStyle={{ borderColor: !emailError ? colors.borderPrimaryColor : colors.errorColor }}
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
            ref={emailInputRef}
          />
          <Input
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderColor: !passwordError ? colors.borderPrimaryColor : colors.errorColor }}
            label={'Password'}
            placeholder={'Enter Password'}
            accessibilityLabel={'Password'}
            secureTextEntry
            errorMessage={passwordError ? 'Please enter your password' : ''}
            labelStyle={{ color: colors.textPrimaryColor }}
            placeholderTextColor={colors.textPrimaryColor}
            onChangeText={updatePassword}
            autoCorrect={false}
            testID={'signup-password-input'}
            leftIcon={
              <Icon
                name={'lock'}
                size={spacing.m}
                color={colors.textPrimaryColor}
                style={{ marginRight: spacing.xs }}
              />
            }
            returnKeyType={'next'}
            returnKeyLabel={'Next'}
            onSubmitEditing={() => { confirmPasswordInputRef.current?.focus() }}
            ref={passwordInputRef}
          />
          <Input
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderColor: !passwordError ? colors.borderPrimaryColor : colors.errorColor }}
            label={'Confirm Password'}
            placeholder={'Enter Password Again'}
            accessibilityLabel={'Confirm Password'}
            secureTextEntry
            autoCorrect={false}
            errorMessage={confirmPasswordError ? 'Please enter a matching password' : ''}
            labelStyle={{ color: colors.textPrimaryColor }}
            placeholderTextColor={colors.textPrimaryColor}
            onChangeText={updateConfirmPassword}
            testID={'signup-confirm-password-input'}
            leftIcon={
              <Icon
                name={'lock'}
                size={spacing.m}
                color={colors.textPrimaryColor}
                style={{ marginRight: spacing.xs }}
              />
            }
            returnKeyType={'go'}
            returnKeyLabel={'Submit'}
            onSubmitEditing={() => { validateSignup() }}
            ref={confirmPasswordInputRef}
          />
        </View>
        <Button
          raised={true}
          containerStyle={styles.signUpButtonContainer}
          titleStyle={{ color: colors.buttonTextPrimaryColor }}
          buttonStyle={{ backgroundColor: colors.buttonPrimaryColor }}
          title={'Signup'}
          accessibilityLabel={'Signup Button'}
          onPress={() => {
            validateSignup()
          }}
        />
        {/* TODO: re-enable with OAuth2 <SocialIcon
          button={true}
          title={'Login in with Facebook'}
          style={styles.socialLogin}
          type={'facebook'}
          iconSize={spacing.s}
          raised={true}
        />
        <SocialIcon
          button={true}
          title={'Login in with Google'}
          style={styles.socialLogin}
          iconSize={spacing.s}
          type={'google'}
          raised={true}
        /> */}
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
            onPress={() => { navigation.navigate('LoginScreen') }} />

        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xs,
    flexDirection: 'column',
    backgroundColor: colors.backgroundPrimaryColor
  },
  logoPlaceholder: {
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  inputContainer: {
    margin: spacing.xs,
  },
  inputGroupContainer: {
    marginTop: 150,

  },
  inputError: {
    borderColor: '#ff0000'
  },
  signupLinkContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  socialLogin: {
    borderRadius: spacing.xxxs,
    margin: spacing.xxs,
  },
  signUpButtonContainer: {
    margin: spacing.xxs,
  }
});

export default SignupForm;
