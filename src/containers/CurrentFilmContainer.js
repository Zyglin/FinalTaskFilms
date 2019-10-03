/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filmSelector, commentSelector, ratingSelector, mailSelector, jwtSelector } from '../selectors';
import CurrentFilmView from '../views/CurrentFilm';
import { getFilmRequest, createCommentRequest, createRatingRequest } from '../actions';

class CurrentFilmContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount = () => {
    const idFilm = this.props.match.params.id;
    const data = { id: idFilm, jwt: this.props.jwt };
    this.props.getFilmRequest(data);
  };

  handleSendRating = event => {
    const idFilm = this.props.match.params.id;
    const rating = {
      data: {
        Value: event.target.value,
        FilmId: idFilm,
      },
      jwt: this.props.jwt,
    };
    this.props.createRatingRequest(rating);
  };

  handleSendComment = () => {
    const idFilm = this.props.match.params.id;
    const comment = {
      data: { Description: this.state.value, FilmId: idFilm },
      jwt: this.props.jwt,
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
    jwt: jwtSelector(state),
  };
}

const mapDispatchToProps = dispatch => ({
  createCommentRequest: comment => dispatch(createCommentRequest(comment)),
  getFilmRequest: data => dispatch(getFilmRequest(data)),
  createRatingRequest: rating => dispatch(createRatingRequest(rating)),
});

CurrentFilmContainer.propTypes = {
  match: PropTypes.any,
  getFilmRequest: PropTypes.func,
  createCommentRequest: PropTypes.func,
  createRatingRequest: PropTypes.func,
  rating: PropTypes.array,
  films: PropTypes.object,
  comments: PropTypes.array,
  mail: PropTypes.string,
  jwt: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentFilmContainer);
