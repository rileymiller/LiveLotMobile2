import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Credentials from '../authentication/Credentials';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { auth0, REFRESH_TOKEN_KEY } from '../authentication/Authentication';
import SnackBar from 'react-native-snackbar';
import { Button } from 'react-native-elements';
import { PasswordRealmParams, PasswordRealmResponse, AuthorizeParams } from 'react-native-auth0';

interface Props {
  onAuth: any;
}

type CredentialParams = {
  refreshToken: string,
  accessToken: string,
  domain: string,
}

const Login: React.FC<Props> = ({onAuth}) => {
  // constructor(props) {
  //   super(props);
  //   this.state = { viewLogin: true };
  //   this.realmLogin = this.realmLogin.bind(this);
  //   this.createUser = this.createUser.bind(this);
  // }
  //Uses refresh token to obtain new auth token
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [credentials, setCredentials] = useState<CredentialParams>({
    refreshToken: '',
    accessToken: '',
    domain: ''
  })
  const refreshUser = (refreshToken: string) => {
    auth0.auth
      .refreshToken({
        refreshToken: refreshToken,
        scope: 'offline_access openid profile',
      })
      .then(credentials => {
        console.log(credentials.refreshToken);
        setIsLoggedIn(true)
        setCredentials(credentials)
        onSuccess(credentials);
      })
      .catch(error =>
        console.log('Refresh Error: ' + error.json.error_description),
      );
  }

  const checkRefreshToken = async () => {
    try {
      const value = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
      if (value !== null) {
        refreshUser(value);
      } else {
        console.log('Value not set');
      }
    } catch (error) {
      console.log('ERROR IN ASYNCSTORAGE');
    }
  }
  
  const storeRefreshToken = async (refreshToken: string | undefined) => {
    try {
      await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken as string);
    } catch (error) {
      console.log(error);
    }
  }

  const onSuccess = (credentials: PasswordRealmResponse) => {
    storeRefreshToken(credentials?.refreshToken);
    auth0.auth
      .userInfo({ token: credentials.accessToken })
      .then(profile => {
        onAuth(credentials, profile);
      })
      .catch(error =>
        console.log('Error authorizing user: ' + error.json.error_description),
      );
  };

  const realmLogin = (username: string, password: string, credentials: CredentialParams) => {
    auth0.auth
      .passwordRealm({
        username: username,
        password: password,
        realm: 'Username-Password-Authentication',
        scope: 'offline_access openid profile',
        audience: 'https://' + credentials.domain + '/userinfo',
      })
      .then(passwordRealmResponse => {
        // console.log(credentials.refreshToken);
        onSuccess(passwordRealmResponse);
        return true;
      })
      .catch(error => {
        console.log(error.message);
        SnackBar.show({
          text: error.message,
          duration: SnackBar.LENGTH_LONG,
          backgroundColor: 'red',
        });
        return false;
      });
  }

  const createUser = (username: string, password: string) => {
    auth0.auth
      .createUser({
        email: username,
        password: password,
        connection: 'Username-Password-Authentication',
      })
      .then(success => {
        SnackBar.show({
          text: 'User created successfuly',
          duration: SnackBar.LENGTH_SHORT,
          backgroundColor: 'green',
        });
      })
      .catch(error => {
        console.log(error);
        let errMsg = error.message;
        if ((error.message = 'unknown error')) {
          errMsg =
            errMsg + ' check that you correctly entered your email address';
        }
        SnackBar.show({
          text: errMsg,
          duration: SnackBar.LENGTH_LONG,
          backgroundColor: 'red',
        });
      });
  }

  const webAuth = (connection: string) => {
    auth0.webAuth
      .authorize({
        scope: 'offline_access openid profile',
        connection: connection,
        audience: 'https://' + credentials.domain + '/userinfo',
        prompt: 'login',
      })
      .then(credentials => {
        console.log(credentials);
        setCredentials(credentials)
        onSuccess(credentials);
      })
      .catch(error =>
        console.log('Error authorizing user: ' + error.error_description),
      );
  }

  useEffect(() => {
    checkRefreshToken()
  }, [])

    const renderLoginOrSignup = () => {
      return isLoggedIn ? <LoginForm realmLogin={realmLogin} /> : <SignupForm createUser={createUser} />;
    }
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.titleBold}>LiveLot </Text>
            <Text style={styles.title}> Alpha-v0.5 </Text>
          </View>
          <View style={styles.tabContainer}>
            <Button
              raised
              onPress={() => setIsLoggedIn(true)}
              title="Log In"
            />
            <Button
              raised
              onPress={() => setIsLoggedIn(true)}
              title="Sign up"
            />
          </View>
          <View style={styles.socialContainer}>
            <TouchableHighlight onPress={() => webAuth('facebook')}>
              <Image
                style={styles.socialIcon}
                source={require('../images/facebook.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => webAuth('google-oauth2')}>
              <Image
                style={styles.socialIcon}
                source={require('../images/google.png')}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.formContainer}>{
            renderLoginOrSignup()
          }</View>
        </View>
      </ScrollView>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  formContainer: {
    flex: 2,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
  },
  socialContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  titleBold: {
    fontWeight: 'bold',
    marginTop: 10,
    width: 100,
    textAlign: 'center',
    fontSize: 16,
  },
  title: {
    marginTop: 10,
    width: 100,
    textAlign: 'center',
    fontSize: 16,
  },
  socialIcon: {
    marginTop: 10,
  },
});
