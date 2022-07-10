import {
  AuthAction,
  LoginFailAction,
  LoginStartAction,
  LoginSuccessAction,
  SignOutStartAction,
  SignOutFinishAction,
  UpdateAuthDataAction,
} from './actionTypes'
import { LoginRequest } from './model/request/login'
import { LoginResponse } from './model/response/login'
import { User } from './model/user'
import { Dispatch } from 'redux'
import { HttpClient } from '../../../config/http'
import { ApiResponse } from '../../../config/api'
import { getBaseRequestData } from '../../../utils/http'
import { GetState } from '../../../redux/state'

export const login = (
  cpf: string,
  password: string,
) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch<LoginStartAction>({
        type: AuthAction.LOGIN_START,
      })

      const { url, defaultHeaders } = await getBaseRequestData('/Auth/Login')
      const data: LoginRequest = {
        login: cpf,
        password,
      }

      const response = await HttpClient.post<LoginResponse>(url, data, {
        headers: defaultHeaders,
      })

      const { token, ...userData } = response.data.data
      const user = new User(
        userData.user,
        userData.cpf,
        userData.name,
        userData.mail,
        userData.phoneNumber,
        userData.tokenAccess,
      )

      dispatch<LoginSuccessAction>({
        type: AuthAction.LOGIN_SUCCESS,
        payload: {
          user,
          token,
        },
      })
    } catch (error: any) {
      let response: ApiResponse | undefined
      if (error.response) response = error.response?.data

      dispatch<LoginFailAction>({
        type: AuthAction.LOGIN_FAIL,
        payload: response?.message ?? error.message,
      })
    }
  }
}

export const updateAuthData = (data: User) => (dispatch: Dispatch) => {
  dispatch<UpdateAuthDataAction>({
    type: AuthAction.UPDATE_AUTH_DATA,
    payload: data,
  })
}

export const logout = () => async (dispatch: Dispatch, getState: GetState) => {
  dispatch<SignOutStartAction>({
    type: AuthAction.SIGNOUT_START,
  })
  dispatch<SignOutFinishAction>({
    type: AuthAction.SIGNOUT_FINISH,
  })
}

