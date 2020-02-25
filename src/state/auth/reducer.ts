import { TokenAuthState, TokenAuthAction, RestoreTokenAction } from 'state/types'
import { TOKEN_AUTH_ACTION_TYPES } from './actions'
import { cloneDeep } from 'lodash'

export const initialState: TokenAuthState = {
  token: '',
  isLoading: false
}

const authenticate = (
  state: TokenAuthState = initialState,
  action: TokenAuthAction
) => {
  const newState: TokenAuthState = cloneDeep(state);

  switch (action.type) {
    case TOKEN_AUTH_ACTION_TYPES.RESTORE_TOKEN:
      // const { token, isLoading } = action.tokenData;
      return { ...newState, ...action.payload }
    default:
      return { ...initialState }
  }
}

export { authenticate }