import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { ClipLoader } from 'react-spinners';
import useStyles from './style';

const filmList = props => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <div className={classes.flexs}>
        {props.films.length > 0 ? (
          props.films.map(film => {
            return (
              <Card className={classes.card} key={film.id}>
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
          })
        ) : (
          <ClipLoader color="blue" />
        )}
      </div>
    </div>
  );
};
filmList.propTypes = {
  films: PropTypes.array,
};

export default filmList;
