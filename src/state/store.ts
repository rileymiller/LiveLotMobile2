import { createStore, combineReducers } from 'redux'
// import { AppState } from 'state/types'
import { authenticate } from 'state/auth/reducer'

const store = createStore(combineReducers({
  authenticate,
}))

export default store