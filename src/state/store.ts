import { createStore, combineReducers } from 'redux'
import { authenticate } from 'state/auth/auth-reducer'
import { lots } from 'state/lots/lot-reducer'
import { AppState } from 'state/types'

export const initialState: AppState = {
  authenticate: {
    token: '',
    user: undefined,
    isSignedIn: false
  },
  lots: {
    lots: []
  },
}
const store = createStore(combineReducers<AppState>({
  authenticate: authenticate,
  lots: lots,
}))

export default store