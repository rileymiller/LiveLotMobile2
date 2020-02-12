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


const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const passwordInputRef = useRef<Input>(null);
  const emailInputRef = useRef<Input>(null);

  const updateEmail = (email: String) => {
    setEmail(email.trim());
    setEmailError(false)
  }
  const updatePassword = (password: String) => {
    setPassword(password.trim());
    setPasswordError(false)
  }

  const navigation = useNavigation()

  const clearLoginForm = () => {
    passwordInputRef.current?.clear();
    emailInputRef.current?.clear();
    setPassword("");
    setEmail("");
    setPasswordError(false);
    setEmailError(false);
  }
  const validateLogin = () => {
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

    if (emailError === false && passwordError === false) {
      clearLoginForm();
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
            placeholder={'Email'}
            returnKeyType={'next'}
            returnKeyLabel={'Next'}
            testID={'email-input'}
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
            placeholder={'Password'}
            accessibilityLabel={'Password'}
            secureTextEntry
            errorMessage={passwordError ? 'Please enter your password' : ''}
            labelStyle={{ color: colors.textPrimaryColor }}
            placeholderTextColor={colors.textPrimaryColor}
            onChangeText={updatePassword}
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
            onSubmitEditing={() => { validateLogin() }}
            ref={passwordInputRef}
          />
        </View>
        <Button
          raised={true}
          containerStyle={styles.loginButtonContainer}
          titleStyle={{ color: colors.buttonTextPrimaryColor }}
          buttonStyle={{ backgroundColor: colors.buttonPrimaryColor }}
          title={'Login'}
          accessibilityLabel={'Login Button'}
          onPress={() => {
            validateLogin()
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
            title='Signup'
            accessibilityLabel={'Signup button'}
            onPress={() => { navigation.navigate('SignupScreen') }} />
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
  loginButtonContainer: {
    margin: spacing.xxs,
  }
});

export default LoginForm;
