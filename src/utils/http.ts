import { ConfigProvider } from '../config/ConfigProvider'
//import { getApplicationToken } from '../features/authentication/utils'
import { StoreState } from '../redux/state'

interface BaseRequestData {
  url: string
  defaultHeaders: {
    'x-api-version': number
    //'x-application-key': string
    //'x-application-token': string
  }
  accountKey?: string
  cpf?: string
  userTaxId?: string
  user?: number
  token?: string
}

export const getBaseRequestData = async (
  endpoint: string,
  state?: StoreState,
): Promise<BaseRequestData> => {
  //const appToken = await getApplicationToken()

  return {
    url: `${ConfigProvider.config.api.baseUrl}${endpoint}`,
    defaultHeaders: {
      ...ConfigProvider.config.api.defaultHeaders,
      //...appToken,
    },
    userTaxId: state?.auth.user?.cpf,
    user: state?.auth.user?.id,
    token: state?.auth.token,
  }
}