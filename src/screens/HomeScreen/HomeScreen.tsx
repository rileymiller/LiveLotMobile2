import React from 'react';
import { View, Text, Button } from 'react-native';
import LotsView from 'components/LotsView/LotsView'
import { useNavigation } from 'hooks/useNavigation'
import { colors } from 'colors/colors'
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundPrimaryColor }}>
      <LotsView />
    </View>
  )
}

export default HomeScreen