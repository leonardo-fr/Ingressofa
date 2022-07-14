import { makeStyles, Theme, createStyles } from '@material-ui/core'
//import loginBackground from '_assets/img/loginBackground.svg'
//import { colors, theme } from '_config/theme'


export const useStyle = makeStyles((theme: Theme)=>
createStyles({
  div:{
    backgroundImage: `url(https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-7991579.jpg&fm=jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width:  400,
    margin: `${theme.spacing(0)} auto`
      
  },
  header: {
    textAlign: 'center',
  },
  loginSubmit: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
  },
  card: {
    marginTop: '50%',
    marginBottom: '75%'
  }
}))