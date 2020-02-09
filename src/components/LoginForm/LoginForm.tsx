import React from 'react';
import { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

type LoginFormProps = {
  realmLogin: (username: string, password: string) => void;
};


const LoginForm: React.FC<LoginFormProps> = ({ realmLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const passwordInputRef = useRef<Input>(null);
  const usernameInputRef = useRef<Input>(null);

  const updateUsername = (username: String) => setUsername(username.trim());
  const updatePassword = (password: String) => setPassword(password.trim());

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
      realmLogin(username, password)
      clearLoginForm();
    }
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>
        Login Bitches
      </Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginForm;
