import React from 'react'
import { Route, RouteProps, Navigate } from 'react-router-dom'
import { AuthenticationRoutes } from '../../features/authentication/constants/routes'
import { validateToken } from '../../features/authentication/utils'
import { useToken } from '../../hook/useToken'

export const ProtectedRoute: React.FC<RouteProps> = ({
  ...rest
}) => {
  const token = useToken()
  let tokenIsValid = validateToken(token!)

  const render = ((Component: any) => (routeProps: RouteProps) => {
    if (!tokenIsValid) 
    return <Navigate to={AuthenticationRoutes.signIn} replace={true} />

    return <Component {...routeProps} />
  })

  return <Route {...rest}/>
}