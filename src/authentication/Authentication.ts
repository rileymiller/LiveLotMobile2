import Auth0 from 'react-native-auth0';
import Credentials from './Credentials';

export const REFRESH_TOKEN_KEY: string = 'refresh_token_key';
export const auth0 = new Auth0(Credentials);
export const CLIENT_ID = Credentials.clientId;
