import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import LotsView from 'components/LotsView/LotsView'
import { useNavigation } from 'hooks/useNavigation'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation'

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;


const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundPrimaryColor }}>
      <LotsView />
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
        onPress={() => navigation.navigate('SplashScreen')}
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
// HomeScreen['navigationOptions'] = () => ({
//   headerRight: () => {
//     <Icon
//       name={'user'}
//       size={spacing.m}
//       color={colors.textPrimaryColor}
//     // style={{ marginRight: spacing.xs }}
//     >

//     </Icon>
//   },
//   title: 'Daddy'
// })
export default HomeScreen