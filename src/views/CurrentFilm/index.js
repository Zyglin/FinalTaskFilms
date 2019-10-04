/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import YouTube from 'react-youtube';
import useStyles from './style';

const CurrentFilmView = props => {
  const classes = useStyles();
  console.log(props);
  const comments = Array.from(props.comments);

  const { onHandleRoute, onHandleChangeStateComment, onHandleSendComment, onHanleSendRating } = props;
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  const labelComment = `Write your own comment ${props.mail}`;
  return (
    <div>
      <div className={classes.flexs}>
        <Card className={classes.card} key={1}>
          <CardContent className={classes.titleCardContent}>
            <Typography className={classes.titles} color="textSecondary" gutterBottom>
              {props.films.name}
            </Typography>
          </CardContent>
          <CardMedia className={classes.cardMediastyle} image={props.films.imageXPath} />
          <div className={classes.raitting}>
            <Rating onChange={onHanleSendRating} name="simple-controlled" value={props.rating} />
          </div>
        </Card>
        <div>
          <YouTube className={classes.youtube} videoId={props.films.youtubeId} opts={opts} onReady={onHandleRoute} />
          <Typography className={classes.typografy}>Film Description:{props.films.description}</Typography>
          <Link className={classes.a} to="/main">
            <Button className={classes.button} size="small" variant="outlined" color="secondary">
              Return to Menu
            </Button>
          </Link>
        </div>
      </div>
      <div className={classes.commentsFlex}>
        <div className={classes.togetherFieldButton}>
          <TextField
            onChange={onHandleChangeStateComment}
            value={props.commentValue}
            id="textarea"
            rows="3"
            label={labelComment}
            multiline
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
          <Button onClick={onHandleSendComment} type="submit" variant="outlined" color="primary">
            Send Comment
          </Button>
        </div>
        <div className={classes.divFortextField}>
          {comments.map(comment => {
            const key = comment.id;
            const commentUser = comment && comment.user && comment.user.email;
            return <TextField id="textarea" key={key} label={commentUser} value={comment.description} disabled rows="2" multiline className={classes.textField} variant="filled" />;
          })}
        </div>
      </div>
    </div>
  );
};

CurrentFilmView.propTypes = {
  onHandleSendComment: PropTypes.func,
  onHandleChangeStateComment: PropTypes.func,
  onHanleSendRating: PropTypes.func,
  rating: PropTypes.number,
  films: PropTypes.object,
  comments: PropTypes.array,
  commentValue: PropTypes.string,
  onHandleRoute: PropTypes.func,
  mail: PropTypes.string,
};

export default CurrentFilmView;
