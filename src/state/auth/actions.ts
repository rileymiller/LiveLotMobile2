import { RestoreTokenAction, SignInAction, SignOutAction } from 'state/types'

export enum TOKEN_AUTH_ACTION_TYPES {
  RESTORE_TOKEN = 'TOKEN_AUTH/RESTORE_TOKEN',
  SIGN_IN = 'TOKEN_AUTH/SIGN_IN',
  SIGN_OUT = 'TOKEN_AUTH/SIGN_OUT'
}

export const restoreToken = (token: string, isLoading: boolean): RestoreTokenAction => ({
  type: TOKEN_AUTH_ACTION_TYPES.RESTORE_TOKEN,
  payload: {
    token,
    isLoading
  }
});

export const signIn = (token: string, isLoading: boolean): SignInAction => ({
  type: TOKEN_AUTH_ACTION_TYPES.SIGN_IN,
  payload: {
    token,
    isLoading
  }
})

export const signOut = (token: string, isLoading: boolean): SignOutAction => ({
  type: TOKEN_AUTH_ACTION_TYPES.SIGN_OUT,
  payload: {
    token,
    isLoading
  }
})