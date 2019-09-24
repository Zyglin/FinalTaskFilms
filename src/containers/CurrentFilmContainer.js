/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentFilmView from '../views/CurrentFilm';
import { getFilmFetch, createCommentFetch, getCommentFetch, createRatingFetch, getRaitingFetch } from '../actions';

class CurrentFilmContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount = () => {
    if (localStorage.getItem('token') === null) {
      this.props.history.push('/');
    } else {
      const idFilm = this.props.match.params.id;
      this.props.getFilmFetch(idFilm);
      this.props.getCommentFetch(idFilm);
      this.props.getRaitingFetch(idFilm).then(data => console.log(data));
    }
  };

  handleSendRating = event => {
    console.log('REQUEST');
    const idFilm = this.props.match.params.id;
    console.log(event.target.value);
    const rating = {
      Value: event.target.value,
      FilmId: this.props.match.params.id,
    };
    this.props.createRatingFetch(rating, idFilm);
  };

  handleSendComment = () => {
    const idFilm = this.props.match.params.id;
    const comment = {
      Description: this.state.value,
      FilmId: idFilm,
    };
    this.props.createCommentFetch(comment, idFilm).then(this.setState({ value: '' }));
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleRoute = event => {
    event.target.playVideoAt(50);
  };

  render() {
    return (
      <CurrentFilmView
        films={this.props.films}
        comments={this.props.comments}
        rating={this.props.rating}
        commentValue={this.state.value}
        onHandleRoute={this.handleRoute}
        onHandleChangeStateComment={this.handleChange}
        onHandleSendComment={this.handleSendComment}
        onHanleSendRating={this.handleSendRating}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    films: state.loginFetch.filmReducer,
    comments: state.loginFetch.commentReducer,
    rating: state.loginFetch.ratingReducer,
  };
}

const mapDispatchToProps = dispatch => ({
  createCommentFetch: (comment, id) => dispatch(createCommentFetch(comment, id)),
  getFilmFetch: id => dispatch(getFilmFetch(id)),
  getCommentFetch: id => dispatch(getCommentFetch(id)),
  createRatingFetch: (rating, id) => dispatch(createRatingFetch(rating, id)),
  getRaitingFetch: id => dispatch(getRaitingFetch(id)),
});

CurrentFilmContainer.propTypes = {
  match: PropTypes.any,
  history: PropTypes.any,
  getFilmFetch: PropTypes.func,
  getCommentFetch: PropTypes.func,
  createCommentFetch: PropTypes.func,
  createRatingFetch: PropTypes.func,
  getRaitingFetch: PropTypes.func,
  rating: PropTypes.any,
  films: PropTypes.any,
  comments: PropTypes.any,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentFilmContainer);
