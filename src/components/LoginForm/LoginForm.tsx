import React from 'react';
import { useState, useRef } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import { Button as PlainButton } from 'react-native'
import { Button, Input, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
import { useNavigation } from 'hooks/useNavigation'
// type LoginFormProps = {
//   realmLogin: (username: string, password: string) => void;
// };


const LoginForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const passwordInputRef = useRef<Input>(null);
  const usernameInputRef = useRef<Input>(null);

  const updateUsername = (username: String) => setUsername(username.trim());
  const updatePassword = (password: String) => setPassword(password.trim());

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
    if (!username?.length) {
      setUsernameError(true)
      usernameInputRef.current?.shake()
    }

    if (!password?.length) {
      setPasswordError(true)
      passwordInputRef.current?.shake()
    }

    if (usernameError === false && passwordError === false) {
      // realmLogin(username, password)
      clearLoginForm();
    }
  }
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={styles.container}>
        {/* <Text>
        YOLO
      </Text> */}
        <View style={styles.inputGroupContainer}>
          <Text style={styles.logoPlaceholder}>
            insert_logo_here
          </Text>
          <Input
            containerStyle={styles.inputContainer}
            label={'Email'}
            placeholder={'Email'}
            labelStyle={{ color: colors.textPrimaryColor }}
            placeholderTextColor={colors.placeholderTextColor}
            leftIcon={
              <Icon
                name={'envelope'}
                size={spacing.s + spacing.xxxs}
                color={colors.textPrimaryColor}
                style={{ marginRight: spacing.xs }}
              />
            }
          />
          <Input
            containerStyle={styles.inputContainer}
            label={'Password'}
            placeholder={'Password'}
            labelStyle={{ color: colors.textPrimaryColor }}
            placeholderTextColor={colors.placeholderTextColor}
            leftIcon={
              <Icon
                name={'lock'}
                size={spacing.m}
                color={colors.textPrimaryColor}
                style={{ marginRight: spacing.xs }}
              />
            }
          />
        </View>
        <Button raised={true} containerStyle={styles.loginButtonContainer} title={'Login'} />
        <SocialIcon
          button={true}
          title={'Sign in with Facebook'}
          style={styles.socialLogin}
          type={'facebook'}
          iconSize={spacing.s}
          raised={true}
        />
        <SocialIcon
          button={true}
          title={'Sign in with Google'}
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
            title='Signup for an account'
            onPress={() => { navigation.navigate('SignupScreen') }} />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: spacing.xs,
    flexDirection: 'column',
    backgroundColor: colors.backgroundPrimaryColor
  },
  logoPlaceholder: {
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  inputContainer: {
    // flex: 1
    // alignItems: 'stretch'
    margin: spacing.xs
  },
  inputGroupContainer: {
    // flex: 6,
    // flexDirection: 'column',
    marginTop: 150,

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
    // flex: 1
    margin: spacing.xxs
  }
});

export default LoginForm;
