import { TokenAuthState, TokenAuthAction, RestoreTokenAction } from 'state/types'
import { TOKEN_AUTH_ACTION_TYPES } from './actions'
import { cloneDeep } from 'lodash'

export const initialState: TokenAuthState = {
  token: '',
  user: undefined,
  isSignedIn: false
}

const authenticate = (
  state: TokenAuthState = initialState,
  action: TokenAuthAction
) => {
  const oldState: TokenAuthState = cloneDeep(state);

  switch (action.type) {
    case TOKEN_AUTH_ACTION_TYPES.SIGN_IN:
    case TOKEN_AUTH_ACTION_TYPES.SIGN_OUT:
      return { ...oldState, ...action.payload }
    default:
      return { ...initialState }
  }
}

export { authenticate }