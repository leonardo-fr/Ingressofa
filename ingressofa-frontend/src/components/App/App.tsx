import DateFnsUtils from '@date-io/date-fns'
import { CssBaseline, Box, MuiThemeProvider } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { useStyle } from './App.style'
import React from 'react'
import { Router } from '../Router'
import { datePickerLocale } from '../../translate'
import { StoreProvider } from '../../redux/StoreProvider'
import { theme } from '../../config/theme'
import { ConfigContextProvider } from '../../config/context'

export const App: React.FC = () => {
  const style = useStyle()

  return (
    <StoreProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={datePickerLocale}>
            <CssBaseline />
            <Box className={style.app}>
              <Router />
            </Box>
      </MuiPickersUtilsProvider>
    </StoreProvider>
  )
}

export default App;