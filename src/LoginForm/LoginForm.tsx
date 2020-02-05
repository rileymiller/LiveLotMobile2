import React from 'react';
import { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

type LoginFormProps = {
  realmLogin: (username: string, password: string) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({realmLogin}) => {
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
      <View style={styles.inputContainer}>
        <Input
          leftIcon={<Icon name="envelope" size={20} color="black" />}
          placeholder="Email or username"
          placeholderTextColor="rgba(44,44,44,0.4)"
          returnKeyType="next"
          onSubmitEditing={() => passwordInputRef.current?.focus()}
          style={[styles.input, usernameError && styles.inputError]}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          blurOnSubmit={false}
          onChangeText={updateUsername}
          ref={usernameInputRef}
        />
        <Input
          leftIcon={<Icon name="lock" size={24} color="black" />}
          placeholder="Password"
          placeholderTextColor="rgba(44,44,44,0.4)"
          secureTextEntry
          returnKeyType="go"
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.input, passwordError && styles.inputError]}
          ref={passwordInputRef}
          onChangeText={updatePassword}
        />
      </View>
      <Button
        raised
        title="LOG IN"
        titleStyle={styles.button}
        buttonStyle={styles.buttonContainer}
        onPress={() => validateLogin()}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 3,
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    color: '#333333',
    paddingHorizontal: 10,
    borderColor: '#eaeaea',
    borderWidth: 1.0,
  },
  inputError: {
    borderColor: '#ff0000',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#d34a2e',
    paddingVertical: 20,
    justifyContent: 'center',
  },
  title: {},
  button: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '400',
    fontSize: 20,
  },
});

export default LoginForm;
