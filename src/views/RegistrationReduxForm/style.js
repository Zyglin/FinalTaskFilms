import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: '20%',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  link: {
    textDecoration: 'none',
    fontSize: '18px',
  },

  button: {
    width: '300px',
    margin: theme.spacing(1),
  },

  input: {
    display: 'none',
  },

  div: {
    height: '100%',
    backgroundImage: 'url(https://i.pinimg.com/originals/f7/ce/9e/f7ce9e6f3d484d87b7590326ea3b0130.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  textField: {
    width: '300px',
    color: 'white',
  },
}));

export default useStyles;
