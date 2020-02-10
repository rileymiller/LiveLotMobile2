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
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const passwordInputRef = useRef<Input>(null);
  const usernameInputRef = useRef<Input>(null);

  const updateUsername = (username: String) => {
    setUsername(username.trim());
    setUsernameError(false)
  }
  const updatePassword = (password: String) => {
    setPassword(password.trim());
    setPasswordError(false)
  }

  const navigation = useNavigation()

  const clearLoginForm = () => {
    passwordInputRef.current?.clear();
    usernameInputRef.current?.clear();
    setPassword("");
    setUsername("");
    setPasswordError(false);
    setUsernameError(false);
  }
  const validateLogin = () => {
    debugger
    console.log('inside validate login')
    if (!username?.length) {
      setUsernameError(true)
      usernameInputRef.current?.shake()
      return
    }

    if (!password?.length) {
      setPasswordError(true)
      passwordInputRef.current?.shake()
      return
    }

    if (usernameError === false && passwordError === false) {
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
            label={'Username'}
            accessibilityLabel={'Username'}
            placeholder={'Username'}
            returnKeyType={'next'}
            returnKeyLabel={'Next'}
            testID={'username-input'}
            onSubmitEditing={() => { passwordInputRef.current?.focus() }}
            errorMessage={usernameError ? 'Please enter your username or email' : ''}
            inputContainerStyle={{ borderColor: !usernameError ? colors.borderPrimaryColor : colors.errorColor }}
            labelStyle={{ color: colors.textPrimaryColor }}
            placeholderTextColor={colors.placeholderTextColor}
            onChangeText={updateUsername}
            keyboardType={'email-address'}
            leftIcon={
              <Icon
                name={'envelope'}
                size={spacing.s + spacing.xxxs}
                color={colors.textPrimaryColor}
                style={{ marginRight: spacing.xs }}
              />
            }
            ref={usernameInputRef}
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
            placeholderTextColor={colors.placeholderTextColor}
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
          title={'Login'}
          accessibilityLabel={'Login Button'}
          onPress={() => {
            validateLogin()
          }}
        />
        <SocialIcon
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
        />
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
    margin: spacing.xxs
  }
});

export default LoginForm;
