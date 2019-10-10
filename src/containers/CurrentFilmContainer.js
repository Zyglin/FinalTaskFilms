import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filmSelector, commentSelector, ratingSelector, mailSelector } from '../selectors';
import CurrentFilmView from '../views/CurrentFilm';
import { getRatings, getComments, filmRequest, createCommentRequest, createRatingRequest } from '../actions';

class CurrentFilmContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount = () => {
    const idFilm = this.props.match.params.id;
    this.props.filmRequest(idFilm);
    this.props.getComments(idFilm);
    this.props.getRatings(idFilm);
  };

  handleSendRating = event => {
    const idFilm = this.props.match.params.id;
    const rating = {
      Value: event.target.value,
      FilmId: idFilm,
    };
    this.props.createRatingRequest(rating);
  };

  handleSendComment = () => {
    const idFilm = this.props.match.params.id;
    const comment = {
      Description: this.state.value,
      FilmId: idFilm,
    };
    this.props.createCommentRequest(comment);
    this.setState({ value: '' });
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
        mail={this.props.mail}
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
    films: filmSelector(state),
    comments: commentSelector(state),
    rating: ratingSelector(state),
    mail: mailSelector(state),
  };
}

const mapDispatchToProps = dispatch => ({
  createCommentRequest: comment => dispatch(createCommentRequest(comment)),
  filmRequest: data => dispatch(filmRequest(data)),
  getComments: data => dispatch(getComments(data)),
  getRatings: data => dispatch(getRatings(data)),
  createRatingRequest: rating => dispatch(createRatingRequest(rating)),
});

CurrentFilmContainer.propTypes = {
  match: PropTypes.any,
  filmRequest: PropTypes.func,
  getRatings: PropTypes.func,
  getComments: PropTypes.func,
  createCommentRequest: PropTypes.func,
  createRatingRequest: PropTypes.func,
  rating: PropTypes.array,
  films: PropTypes.object,
  comments: PropTypes.array,
  mail: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentFilmContainer);
