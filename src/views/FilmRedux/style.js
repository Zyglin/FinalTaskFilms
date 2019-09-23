import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  a: {
    textDecoration: 'none',
  },
  flexs: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '30px',
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
