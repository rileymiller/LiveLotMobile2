import { TokenAuthState, TokenAuthAction, RestoreTokenAction } from 'state/types'
import { TOKEN_AUTH_ACTION_TYPES } from './auth-actions'
import { cloneDeep } from 'lodash'

const initialAuthState: TokenAuthState = {
  token: '',
  user: undefined,
  isSignedIn: false
}
const authenticate = (
  state = initialAuthState,
  action: TokenAuthAction
) => {
  const oldState = cloneDeep(state);

  switch (action.type) {
    case TOKEN_AUTH_ACTION_TYPES.SIGN_IN:
    case TOKEN_AUTH_ACTION_TYPES.SIGN_OUT:
      return { ...oldState, ...action.payload }
    default:
      return state
  }
}

export { authenticate }