/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Navigate, useNavigate} from 'react-router-dom'
import { Container, Grid, CircularProgress, Button } from '@material-ui/core'
//import { LoginButton } from 'features/authentication/components/LoginButton'
//import { AuthenticationTitle } from 'features/authentication/components/AuthenticationTitle/AuthenticationTitle'
//import { StoreState } from 'redux/state'
//import { Loader } from 'components/Loader'
import Box from '@mui/material/Box';
//import { useMask } from 'hooks/useMask'
//import { maskCpf } from '_utils/masks/taxPayer'
import { useStyle } from './SignIn.style'
import { useDispatch, useSelector } from 'react-redux'
import { TextField } from '@material-ui/core'
//import { PasswordField } from 'components/PasswordField'
//import { AuthenticationRoutes } from 'features/authentication/constants/routes'
//import { ForgotPassword } from 'features/authentication/components/ForgotPassword'
//import { useToken } from 'hooks/useToken'
//import { validateToken } from 'features/authentication/utils'
//import { OnboardingRoutes } from 'features/onboarding/constants/routes'
////import { SaveTaxId } from 'features/authentication/components/SaveTaxId'
//import { SwitchIOS } from 'components/SwitchIOS'
import { CookiesProvider, useCookies } from 'react-cookie'
import { Alert } from '../../../../components/Alert/Alert'
import { StoreState } from '../../../../redux/state'
import { useToken } from '../../../../hook/useToken'
//import { validateToken } from '../../utils'
import { LoadingAuthState, SuccessAuthState } from '../../redux/state'
import { AccountRoutes } from '../../../account/constants/routes'
import { login,  } from '../../redux/action'

export const SignIn: React.FC = () => {
  const [password, setPassword] = React.useState('')
  const [login, setLogin] = React.useState('')
  const authState = useSelector((state: StoreState) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //const [taxIdInput, setCpfInput] = useMask(maskCpf)
  const style = useStyle()
  const { acceptedTerms, firstAccess } = useSelector((store: StoreState) => ({
    acceptedTerms: store.auth.user?.acceptedTerms,
    firstAccess: store.auth.user?.isFirstAccess,
  }))
  const [validationToken, setTokenIsValid] = React.useState(Boolean)
  const token = useToken()
  const [switchAlternateState, setSwitchAlternateState] =
    React.useState(Boolean)
  const [onChange, setOnChange] = React.useState(Boolean)
  //const [cookies, setCookie, removeCookie] = useCookies(['login-token'])

  React.useEffect(() => {
    if (token ) {
      setTokenIsValid(true)
      //dispatch(signOut())
    } else if (authState instanceof SuccessAuthState) {
      navigate(AccountRoutes.home)
    }
  }, [token, authState])


  const onPasswordChange = (event: any) => {
    setPassword(event.target.value)
  }

  const onLoginChange = (event: any) => {
    setLogin(event.target.value)
  }

  const onSubmit = async (event: any) => {
    event.preventDefault()

    //dispatch(
      //login(
        //passwordInput,
        //switchAlternateState,
        //cookies['login-token'],
      //),
    //)
  }

  const passwordIsValid =
    password.length >= 8 && password.length <= 16
  //const isValid = cookies['login-token'] && passwordIsValid;

  return (
      <Container className={style.container}>
        {validationToken && (
          <Alert
            title="Aviso!"
            message="Sua sessão expirou."
            severity={'error'}
          />
        )}
        {authState.errorMessage && (
          <Alert
            title="Falha na autenticação"
            message={authState.errorMessage}
            severity={'error'}
          />
        )}
        <Container className={style.inputs}>
          <TextField
              variant="filled"
              placeholder="Digite aqui"
              label="Email"
              value={login}
              onChange={onLoginChange}
            />
            <TextField
              variant="filled"
              placeholder="Digite aqui"
              label="Senha"
              value={password}
              onChange={onPasswordChange}
            />
            <Button disabled={false} />
        </Container>
      </Container>
  )
}