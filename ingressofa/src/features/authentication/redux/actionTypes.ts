import { User } from './model/user'
//import { UserFirstAccessForm } from './models/userFirstAccessForm'
//import { ResetPasswordForm } from './models/resetPasswordForm'

export enum AuthAction {
  LOGIN_START = 'LOGIN_START',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',

  UPDATE_AUTH_DATA = 'UPDATE_AUTH_DATA',

  SIGNOUT_START = 'SIGNOUT_START',
  SIGNOUT_FINISH = 'SIGNOUT_FINISH',

  UPDATE_PASSWORD_DATA = 'UPDATE_PASSWORD_DATA',
  CHANGE_PASSWORD_START = 'CHANGE_PASSWORD_START',
  CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_FAIL = 'CHANGE_PASSWORD_FAIL',

  FINDUSERCONTACTS_START = 'FINDUSERCONTACTS_START',
  FINDUSERCONTACTS_SUCESS = 'FINDUSERCONTACTS_SUCESS',
  FINDUSERCONTACTS_FAIL = 'FINDUSERCONTACTS_FAIL',

  UPDATE_RECOVERPWD_DATA = 'UPDATE_RECOVERPWD_DATA',

  RESET_PASSWORD_START = 'RESET_PASSWORD_START',
  RESET_PASSWORD_SUCESS = 'RESET_PASSWORD_SUCESS',
  RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL',

  UPDATE_TERMS_START = 'UPDATE_TERMS_START',
  UPDATE_TERMS_SUCCESS = 'UPDATE_TERMS_SUCCESS',
  UPDATE_TERMS_FAIL = 'UPDATE_TERMS_FAIL',
}

export interface LoginStartAction {
  type: AuthAction.LOGIN_START
}

export interface LoginSuccessAction {
  type: AuthAction.LOGIN_SUCCESS
  payload: {
    user: User
    token: string
  }
}

export interface LoginFailAction {
  type: AuthAction.LOGIN_FAIL
  payload: string
}

export interface SignOutStartAction {
  type: AuthAction.SIGNOUT_START
}

export interface SignOutFinishAction {
  type: AuthAction.SIGNOUT_FINISH
}

export interface UpdateAuthDataAction {
  type: AuthAction.UPDATE_AUTH_DATA
  payload?: User
}

export interface ChangePasswordFailAction {
  type: AuthAction.CHANGE_PASSWORD_FAIL
  payload: string
}

export interface FindUserContactsStartAction {
  type: AuthAction.FINDUSERCONTACTS_START
}


export interface FindUserContactsFailAction {
  type: AuthAction.FINDUSERCONTACTS_FAIL
  payload: string
}

export interface ResetPasswordFailAction {
  type: AuthAction.RESET_PASSWORD_FAIL
  payload: string
}

export interface UpdateTermsStartAction {
  type: AuthAction.UPDATE_TERMS_START
}

export interface UpdateTermsSuccessAction {
  type: AuthAction.UPDATE_TERMS_SUCCESS
  payload?: User
}

export interface UpdateTermsFailAction {
  type: AuthAction.UPDATE_TERMS_FAIL
  payload: string
}

export type AuthActions =
  | LoginStartAction
  | LoginSuccessAction
  | LoginFailAction
  | SignOutStartAction
  | SignOutFinishAction
  | UpdateAuthDataAction
  | ChangePasswordFailAction
  | FindUserContactsStartAction
  | FindUserContactsFailAction
  | ResetPasswordFailAction
  | UpdateTermsStartAction
  | UpdateTermsSuccessAction
  | UpdateTermsFailAction