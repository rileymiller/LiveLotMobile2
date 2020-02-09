import React, { useState, useEffect } from 'react';
import {
  // Image,
  StyleSheet,
  Text,
  // TouchableHighlight,
  View,
} from 'react-native';
import LoginForm from 'components/LoginForm/LoginForm';
import { Button } from 'react-native-elements';
import { useNavigation } from 'hooks/useNavigation';

import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
// import SignupForm from './SignupForm';
// import Credentials from '../authentication/Credentials';
// import { ScrollView } from 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-community/async-storage';
// import { auth0, REFRESH_TOKEN_KEY } from '../authentication/Authentication';
// import SnackBar from 'react-native-snackbar';
// import { Button } from 'react-native-elements';
// import { PasswordRealmResponse } from 'react-native-auth0';
import { CredentialParams } from 'screens/SplashScreen/SplashScreen';
import { TextInput } from 'react-native-gesture-handler';

interface Props {
  onAuth: any;
}

const StartView: React.FC<Props> = ({ onAuth }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState<CredentialParams>({
    refreshToken: '',
    accessToken: '',
    domain: '',
  });

  // const refreshUser = (refreshToken: string) => {
  //   auth0.auth
  //     .refreshToken({
  //       refreshToken: refreshToken,
  //       scope: 'offline_access openid profile',
  //     })
  //     .then(credentials => {
  //       console.log(credentials.refreshToken);
  //       setIsLoggedIn(true);
  //       setCredentials(credentials);
  //       onSuccess(credentials);
  //     })
  //     .catch(error =>
  //       console.log('Refresh Error: ' + error.json.error_description),
  //     );
  // };

  // const checkRefreshToken = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
  //     if (value !== null) {
  //       refreshUser(value);
  //     } else {
  //       console.log('Value not set');
  //     }
  //   } catch (error) {
  //     console.log('ERROR IN ASYNCSTORAGE');
  //   }
  // };

  // const storeRefreshToken = async (refreshToken: string | undefined) => {
  //   try {
  //     await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken as string);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const onSuccess = (credentials: PasswordRealmResponse) => {
  //   storeRefreshToken(credentials.refreshToken);
  //   auth0.auth
  //     .userInfo({ token: credentials.accessToken })
  //     .then(profile => {
  //       onAuth(credentials, profile);
  //     })
  //     .catch(error =>
  //       console.log('Error authorizing user: ' + error.json.error_description),
  //     );
  // };

  // const realmLogin = (username: string, password: string) => {
  //   auth0.auth
  //     .passwordRealm({
  //       username: username,
  //       password: password,
  //       realm: 'Username-Password-Authentication',
  //       scope: 'offline_access openid profile',
  //       audience: 'https://' + Credentials.domain + '/userinfo',
  //     })
  //     .then(passwordRealmResponse => {
  //       // console.log(credentials.refreshToken);
  //       onSuccess(passwordRealmResponse);
  //       return true;
  //     })
  //     .catch(error => {
  //       console.log(error.message);
  //       SnackBar.show({
  //         text: error.message,
  //         duration: SnackBar.LENGTH_LONG,
  //         backgroundColor: 'red',
  //       });
  //       return false;
  //     });
  // };

  // const createUser = (username: string, password: string) => {
  //   auth0.auth
  //     .createUser({
  //       email: username,
  //       password: password,
  //       connection: 'Username-Password-Authentication',
  //     })
  //     .then(success => {
  //       SnackBar.show({
  //         text: 'User created successfuly',
  //         duration: SnackBar.LENGTH_SHORT,
  //         backgroundColor: 'green',
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       let errMsg = error.message;
  //       if ((error.message = 'unknown error')) {
  //         errMsg =
  //           errMsg + ' check that you correctly entered your email address';
  //       }
  //       SnackBar.show({
  //         text: errMsg,
  //         duration: SnackBar.LENGTH_LONG,
  //         backgroundColor: 'red',
  //       });
  //     });
  // };

  // const webAuth = (connection: string) => {
  //   auth0.webAuth
  //     .authorize({
  //       scope: 'offline_access openid profile',
  //       connection: connection,
  //       audience: 'https://' + Credentials.domain + '/userinfo',
  //       prompt: 'login',
  //     })
  //     .then(credentials => {
  //       console.log(credentials);
  //       setCredentials(credentials);
  //       onSuccess(credentials);
  //     })
  //     .catch(error =>
  //       console.log('Error authorizing user: ' + error.error_description),
  //     );
  // };

  // useEffect(() => {
  //   checkRefreshToken();
  // }, []); // eslint-disable-line

  const renderLoginOrSignup = () => {
    const realmLogin = () => { };
    return <LoginForm realmLogin={realmLogin} />;
    // return isLoggedIn ? <LoginForm realmLogin={realmLogin} /> : <SignupForm createUser={createUser} />;
    // return !isLoggedIn ? <LoginForm realmLogin={realmLogin} /> : null;
  };
  const navigation = useNavigation();


  return (
    <View style={styles.screenContainer}>
      <View style={styles.titleBackground}>
        <Text>insert_logo_here</Text>
        <Text style={styles.livelotTitle} testID="title">LiveLot</Text>
        <Text>v.0.0-alpha</Text>
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
            titleStyle={{ color: colors.buttonSecondaryTextColor }}
            buttonStyle={{ borderStyle: 'solid', borderColor: colors.buttonBorderColor }}
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
    justifyContent: 'center'
  }
})

export default StartView;
