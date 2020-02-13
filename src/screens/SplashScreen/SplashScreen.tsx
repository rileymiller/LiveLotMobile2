import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from 'hooks/useNavigation';
import StartView from 'components/StartView/StartView';
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing';
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
      <Text style={copyRightStyles.copyRight}>© 2020 LiveLot LLC All Rights Reserved</Text>
    </View>
  );
};

const copyRightStyles = StyleSheet.create({
  copyRight: {
    alignSelf: 'stretch',
    backgroundColor: colors.backgroundPrimaryColor,
    textAlign: 'center',
    color: colors.textPrimaryColor,
    paddingBottom: spacing.xs
  }
})

// Template for custom header options
SplashScreen['navigationOptions'] = () => ({
  title: '',
})

// eslint-disable-next-line no-undef
export { CredentialParams, copyRightStyles };
export default SplashScreen;
