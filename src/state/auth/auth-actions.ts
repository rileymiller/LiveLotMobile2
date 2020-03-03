import { RestoreTokenAction, SignInAction, SignOutAction } from 'state/types'
import { XOutboundUserDTO } from 'api/user/XOutboundUserDTO'

export enum TOKEN_AUTH_ACTION_TYPES {
  RESTORE_TOKEN = 'TOKEN_AUTH/RESTORE_TOKEN',
  SIGN_IN = 'TOKEN_AUTH/SIGN_IN',
  SIGN_OUT = 'TOKEN_AUTH/SIGN_OUT'
}

export const restoreToken = (token: string): RestoreTokenAction => ({
  type: TOKEN_AUTH_ACTION_TYPES.RESTORE_TOKEN,
  payload: {
    token,
  }
});

export const signIn = (token: string, user: XOutboundUserDTO, isSignedIn: boolean): SignInAction => ({
  type: TOKEN_AUTH_ACTION_TYPES.SIGN_IN,
  payload: {
    token,
    user,
    isSignedIn
  }
})

export const signOut = (token: string, isSignedIn: boolean): SignOutAction => ({
  type: TOKEN_AUTH_ACTION_TYPES.SIGN_OUT,
  payload: {
    token,
    isSignedIn
  }
})