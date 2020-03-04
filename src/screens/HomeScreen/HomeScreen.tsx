import React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { updateLots } from 'state/lots/lot-actions'
import { View, } from 'react-native';
import WebSocket from 'components/WebSocket/WebSocket'
import LotsView from 'components/LotsView/LotsView'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'components/AppBase/AppBase'
import { colors } from 'colors/colors'
import SignOutButton from 'components/SignOutButton/SignOutButton'
import CopyRightFooter from 'components/CopyRightFooter/CopyRightFooter'
import AppLogo from 'components/AppLogo/AppLogo'
import { spacing } from 'spacing/spacing'

type SignupScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'SignupScreen'
>;

type Props = {
  navigation: SignupScreenNavigationProps
}


const HomeScreen: React.FC<Props> = ({ navigation }) => {


  navigation.setOptions({
    title: 'LiveLot',
    headerTitleStyle: {
      fontSize: spacing.l,
      color: colors.textPrimaryColor
    },
    headerRight: () => (
      <SignOutButton />
    ),
  });

  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundPrimaryColor }}>
      <LotsView />
      <CopyRightFooter />
      <WebSocket />
    </View>
  )
}

export default HomeScreen