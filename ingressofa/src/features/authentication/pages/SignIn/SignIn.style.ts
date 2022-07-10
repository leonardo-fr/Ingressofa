import { makeStyles } from '@material-ui/core'
//import loginBackground from '_assets/img/loginBackground.svg'
//import { colors, theme } from '_config/theme'

const bottomSpacing = 16
const screenHeight = window.screen.height

const calculateBackgroundHeight = () => {
  const baseBackgroundImageHeight = 150
  return screenHeight / 4 + baseBackgroundImageHeight - bottomSpacing
}
const calculateContentTopPadding = (backgroundHeightWeight: number) => {
  const effectiveBackgroundHeight = backgroundHeight * backgroundHeightWeight
  let result = screenHeight / 2 - effectiveBackgroundHeight + bottomSpacing

  if (result < 0) result = result * -1

  return result
}

const backgroundHeight = calculateBackgroundHeight()

export const useStyle = makeStyles({
  container: {
    minHeight: '100vh',
    //backgroundImage: `url(${loginBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: '900px',
  },
  header: {
    //color: colors.system.light.primary,
    marginBottom: 64,
  },
  forgotPassword: {
    textAlign: 'center',
  },
})