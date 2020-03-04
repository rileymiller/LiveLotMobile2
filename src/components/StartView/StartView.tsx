import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
import AppLogo from 'components/AppLogo/AppLogo';

const StartView = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <View style={styles.titleBackground}>
        <AppLogo size={spacing.xl} />
        <Text style={styles.livelotTitle} testID="title">LiveLot 🌴</Text>
        <Text style={{ color: colors.textPrimaryColor }}>v.0.0-alpha</Text>
      </View>
      <View style={styles.buttonContainer} testID="button-container">
        <View style={styles.loginButton}>
          <Button
            titleStyle={{ color: colors.buttonPrimaryTextColor }}
            buttonStyle={{ backgroundColor: colors.buttonPrimaryColor }}
            title="Login"
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </View>
        <View style={styles.signupButton}>
          <Button
            title="Signup"
            titleStyle={{ color: colors.textPrimaryColor }}
            buttonStyle={{ borderStyle: 'solid', borderColor: colors.buttonBorderColor, borderWidth: .8, }}
            type='outline'
            onPress={() => navigation.navigate('SignupScreen')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: colors.backgroundPrimaryColor,
    flexDirection: 'column',
    alignItems: 'stretch',
    flex: 1,
    padding: 4
  },
  livelotTitle: {
    color: colors.textPrimaryColor,
    fontSize: spacing.l,
    fontWeight: 'bold',
  },
  titleBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: spacing.xxxs,
    flex: 4,
    color: colors.textPrimaryColor
  },
  buttonContainer: {
    flex: .3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: spacing.xxs,
    marginBottom: spacing.xxs,
  },
  loginButton: {
    flex: 1,
    margin: spacing.xxxs,
    borderRadius: spacing.xxxs,
    padding: spacing.xxxxs,
    justifyContent: 'center',
  },
  signupButton: {
    flex: 1,
    margin: spacing.xxxs,
    borderRadius: spacing.xxxs,
    padding: spacing.xxxxs,
    justifyContent: 'center',
  }
})

export default StartView;
