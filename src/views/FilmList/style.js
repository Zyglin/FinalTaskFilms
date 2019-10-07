import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  a: {
    textDecoration: 'none',
  },
  div: {
    height: '100%',
    paddingTop: '30px',
    background: '-webkit-radial-gradient(#4CCEB2, #2F8FD8)',
  },
  flexs: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '60px',
  },
  cardMediastyle: {
    height: '345px',
  },
  titleCardContent: {
    padding: '5px',
  },
  card: {
    minWidth: 275,
    minHeight: 350,
    marginTop: '20px',
    marginRight: '20px',
  },
  titles: {
    fontSize: 14,
  },
}));

export default useStyles;
