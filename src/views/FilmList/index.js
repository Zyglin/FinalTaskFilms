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
  const films = Array.from(props.films);
  return (
    <div className={classes.div}>
      <div className={classes.flexs}>
        {films.map(film => {
          const key = films.id;
          return (
            <Card className={classes.card} key={key}>
              <CardContent className={classes.titleCardContent}>
                <Typography className={classes.titles} color="textSecondary" gutterBottom>
                  {film.name}
                </Typography>
              </CardContent>
              <CardMedia className={classes.cardMediastyle} image={film.imageXPath} />
              <CardActions>
                <Link className={classes.a} to={`${film.id}`}>
                  <Button size="small" variant="outlined" color="primary">
                    More Details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
filmList.propTypes = {
  films: PropTypes.array,
};

export default filmList;
