import { XOutboundUserDTO } from 'api/user/XOutboundUserDTO'
import { XOutboundLotDTO } from 'api/lots/XOutboundLotDTO'

export type TokenAuthState = {
  token: string;
  user?: XOutboundUserDTO;
  isSignedIn?: boolean;
}

export type LotState = {
  lots: XOutboundLotDTO[]
}

export type LoadingState = {
  isLoading: boolean
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


export type UpdateLotAction = {
  type: string,
  payload: LotState
}

export type IsLoadingAction = {
  type: string,
  payload: LoadingState
}

export type DoneLoadingAction = {
  type: string,
  payload: LoadingState
}

export type TokenAuthAction = RestoreTokenAction | SignOutAction | SignInAction

export type LotAction = UpdateLotAction

export type AppState = {
  authenticate: TokenAuthState,
  lots: LotState,
}