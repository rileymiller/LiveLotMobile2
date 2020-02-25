export type TokenAuthState = {
  token: string;
  isLoading: boolean;
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
  token: string,
  isLoading: boolean
}