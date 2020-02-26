import React from 'react';
import { View } from 'react-native';
import CopyRightFooter from 'components/CopyRightFooter/CopyRightFooter'
import StartView from 'components/StartView/StartView';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'components/App/App'

type SignupScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'SignupScreen'
>;

type Props = {
  navigation: SignupScreenNavigationProps
}

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  navigation.setOptions({
    title: ''
  })
  return (
    <View style={{ flex: 1, }}>
      <StartView />
      <CopyRightFooter />
    </View>
  );
};


export default SplashScreen;
