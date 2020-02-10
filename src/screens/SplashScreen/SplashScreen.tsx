import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from 'hooks/useNavigation';
import Login from 'components/StartView/StartView';
import StartView from 'components/StartView/StartView';
type CredentialParams = {
  refreshToken: string;
  accessToken: string;
  domain: string;
};

const SplashScreen = () => {
  const navigation = useNavigation();

  const onAuth = (credentials: CredentialParams, profile: any) => {
    navigation.navigate('Profile', {
      credentials: credentials,
      profile: profile,
    });
  };

  return (
    <View style={{ flex: 1, }}>
      <StartView onAuth={onAuth} />
    </View>
  );
};

// Template for custom header options
SplashScreen['navigationOptions'] = () => ({
  title: ''
})

// eslint-disable-next-line no-undef
export { CredentialParams };
export default SplashScreen;
