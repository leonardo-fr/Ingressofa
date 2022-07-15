import { combineReducers } from 'redux'
import { AuthAction } from '../features/authentication/redux/actionTypes'
import { authReducer } from '../features/authentication/redux/reducer'
import { initialStoreState, StoreState } from './state'
//import { AuthAction } from 'features/authentication/redux/actionTypes'

export const appReducer = combineReducers({
  auth: authReducer,
})

export const rootReducer = (
  state: StoreState = initialStoreState,
  action: any,
): StoreState => {
  if (action.type === AuthAction.SIGNOUT_FINISH) return initialStoreState

  return appReducer(state, action)
}