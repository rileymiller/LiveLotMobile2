import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '../../hooks/useNavigation';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text testID="title">Login page</Text>
      <Button title="About page" onPress={() => navigation.navigate('About')} />
    </View>
  );
};

export default LoginScreen;
