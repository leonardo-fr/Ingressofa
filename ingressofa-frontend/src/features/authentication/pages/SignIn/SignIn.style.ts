import { makeStyles } from '@material-ui/core'
//import loginBackground from '_assets/img/loginBackground.svg'
//import { colors, theme } from '_config/theme'


export const useStyle = makeStyles({
  container: {
    backgroundImage: `url(https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-7991579.jpg&fm=jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    height: '1680px',
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  header: {
    //color: colors.system.light.primary,
    marginBottom: 64,
  },
  forgotPassword: {
    textAlign: 'center',
  },
})