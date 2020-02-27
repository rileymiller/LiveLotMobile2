import { XOutboundUserDTO } from 'api/user/XOutboundUserDTO'

export type TokenAuthState = {
  token: string;
  user?: XOutboundUserDTO;
  isSignedIn?: boolean;
}

export type RestoreTokenAction = {
  type: string,
  payload: TokenAuthState,
}

export type SignInAction = {
  type: string,
  payload: TokenAuthState
}

export type SignOutAction = {
  type: string,
  payload: TokenAuthState
}

export type TokenAuthAction = RestoreTokenAction | SignOutAction | SignInAction

export type AppState = {
  authenticate: TokenAuthState
}