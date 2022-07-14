import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import { ProtectedRoute } from 'components/ProtectedRoute'
import { AuthenticationRoutes } from '../../features/authentication/constants/routes'
import { SignIn } from '../../features/authentication/pages/SignIn'

//import { SignOut } from 'features/authentication/pages/SignOut'
//<Route path={AuthenticationRoutes.signOut} element={SignOut} />

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={AuthenticationRoutes.signIn} element={<SignIn/>} />
    </Routes>
    </BrowserRouter>
  )
}