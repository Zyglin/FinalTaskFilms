import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(left, black 5%, #4CCEB2 50%, black)',
  },

  form: {
    paddingTop: '100px',
    height: '650px',
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
  dragAndDrop: {
    border: '1px solid white',
    width: '600px',
    color: 'white',
    height: '200px',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '200px',
  },
}));

export default useStyles;
