import React from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation } from '../../hooks/useNavigation'

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text testID="title">Home Page</Text>
      <Button title="Home page" onPress={() => navigation.navigate('SplashScreen')} />
    </View>
  )
}

export default HomeScreen