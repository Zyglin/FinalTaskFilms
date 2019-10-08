import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    width: '400px',
    minHeight: 350,
  },
  cardMediastyle: {
    height: '500px',
  },
  flexs: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '100px',
    marginLeft: '100px',
    marginRight: '100px',
  },
  titles: {
    fontSize: 16,
  },
  titleCardContent: {
    padding: '5px',
  },
  raitting: {
    display: 'flex',
    width: '400px',
    justifyContent: 'center',
  },
  youtube: {
    marginTop: '40px',
    marginLeft: '10px',
  },
  typografy: {
    marginLeft: '10px',
    fontSize: 18,
    width: '650px',
    height: '100px',
    backgroundColor: 'snow',
  },
  a: {
    textDecoration: 'none',
  },
  button: {
    width: '650px',
    marginLeft: '10px',
  },
  commentsFlex: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textField: {
    width: '800px',
    height: '90px',
    marginTop: '10px',
  },

  togetherFieldButton: {
    width: '800px',
    height: '150px',
  },
  divFortextField: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  divImage: {
    marginTop: '10px',
    width: '40px',
  },
}));

export default useStyles;
