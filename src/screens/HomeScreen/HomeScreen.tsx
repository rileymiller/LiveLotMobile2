import React from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation } from 'hooks/useNavigation'
import { colors } from 'colors/colors'
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundPrimaryColor }}>
      <Text testID="title">Home Page</Text>
    </View>
  )
}

export default HomeScreen