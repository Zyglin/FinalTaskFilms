import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import useStyles from './style';

const filmList = props => {
  const classes = useStyles();
  function PushComponent() {
    const rows = [];
    for (let i = 0; i < props.films.length; i += 1) {
      rows.push(
        <Card className={classes.card} key={i}>
          <CardContent className={classes.titleCardContent}>
            <Typography className={classes.titles} color="textSecondary" gutterBottom>
              {props.films[i].name}
            </Typography>
          </CardContent>
          <CardMedia className={classes.cardMediastyle} image={props.films[i].imageXPath} />
          <CardActions>
            <Link className={classes.a} to={`${props.films[i].id}`}>
              <Button size="small" variant="outlined" color="primary">
                More Details
              </Button>
            </Link>
          </CardActions>
        </Card>
      );
    }
    return rows;
  }
  const rows = PushComponent();
  return (
    <div>
      <div className={classes.flexs}>{rows}</div>
    </div>
  );
};
filmList.propTypes = {
  films: PropTypes.array,
};

export default filmList;
