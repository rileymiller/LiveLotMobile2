import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '../../../hooks/useNavigation';
import Login from '../../Login/Login';
type CredentialParams = {
  refreshToken: string;
  accessToken: string;
  domain: string;
};

const LoginScreen = () => {
  const navigation = useNavigation();

  const onAuth = (credentials: CredentialParams, profile: any) => {
    navigation.navigate('Profile', {
      credentials: credentials,
      profile: profile,
    });
  };

  return (
    <View style={{ flex: 1, }}>
      {/* <Text testID="title">Login page</Text>
      <Button title="About page" onPress={() => navigation.navigate('About')} /> */}
      <Login onAuth={onAuth} />
    </View>
  );
};

// eslint-disable-next-line no-undef
export { CredentialParams };
export default LoginScreen;
