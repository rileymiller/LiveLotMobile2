import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import LotsView from 'components/LotsView/LotsView'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'components/AppBase/AppBase'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
import SignOutButton from 'components/SignOutButton/SignOutButton'
import CopyRightFooter from 'components/CopyRightFooter/CopyRightFooter'
import Icon from 'react-native-vector-icons/FontAwesome'
import BackToSplashScreenButton from 'components/BackToSplashScreenButton/BackToSplashScreenButton'


type SignupScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'SignupScreen'
>;

type Props = {
  navigation: SignupScreenNavigationProps
}


const HomeScreen: React.FC<Props> = ({ navigation }) => {
  navigation.setOptions({
    title: 'InsertLogo',
    // headerLeft: () => (
    //   <BackToSplashScreenButton />
    // ),
    headerRight: () => (
      <SignOutButton />
    )
  });

  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundPrimaryColor }}>
      <LotsView />
      <CopyRightFooter />
    </View>
  )
}

export default HomeScreen