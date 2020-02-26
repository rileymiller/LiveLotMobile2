import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import LotsView from 'components/LotsView/LotsView'
import { useNavigation } from '@react-navigation/native'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
import { copyRightStyles } from 'screens/SplashScreen/SplashScreen'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation'

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;


const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundPrimaryColor }}>
      <LotsView />
      <Text style={copyRightStyles.copyRight}>© 2020 LiveLot LLC All Rights Reserved</Text>
    </View>
  )
}

// Template for custom header options
HomeScreen['navigationOptions'] = ({
  navigation,
}: {
  navigation: Navigation;
}) => ({
  title: 'Mines Lots',
  headerRight: () => {
    return (
      <Icon
        name='sign-out'
        testID={'signout-button'}
        size={spacing.m}
        color={colors.textPrimaryColor}
        style={{ marginRight: spacing.xs }}
        onPress={() => navigation.navigate('SplashScreen')} // add logic to hit signout endpoint here 
      />
    )
  },
  headerLeft: () => {
    return (
      <Icon
        name='user'
        testID={'profile-button'}
        size={spacing.m}
        color={colors.textPrimaryColor}
        style={{ marginLeft: spacing.xs }}
      />
    )
  }
})
export default HomeScreen