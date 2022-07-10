
import {
  AuthState,
  UnauthenticatedState,
} from '../features/authentication/redux/state'

import { AccountState, InitialAccountState } from '../features/account/redux/state'
import { InitialUserInformationState, UserInformationState } from '../features/user/redux/state'


export interface StoreState {
  auth: AuthState
}

export const initialStoreState: StoreState = {
  auth: new UnauthenticatedState(),
}

export type GetState = () => StoreState