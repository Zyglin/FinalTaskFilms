/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filmSelector, commentSelector, ratingSelector, mailSelector, jwtSelector } from '../selectors';
import CurrentFilmView from '../views/CurrentFilm';
import { getFilmAxios, createCommentAxios, getCommentAxios, createRatingAxios, getRaitingAxios } from '../actions';

class CurrentFilmContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount = () => {
    const idFilm = this.props.match.params.id;
    this.props.getFilmAxios(idFilm, this.props.jwt);
    this.props.getCommentAxios(idFilm, this.props.jwt);
    this.props.getRaitingAxios(idFilm, this.props.jwt);
  };

  handleSendRating = event => {
    const idFilm = this.props.match.params.id;
    const rating = {
      Value: event.target.value,
      FilmId: this.props.match.params.id,
    };
    this.props.createRatingAxios(rating, idFilm, this.props.jwt);
  };

  handleSendComment = () => {
    const idFilm = this.props.match.params.id;
    const comment = {
      Description: this.state.value,
      FilmId: idFilm,
    };
    this.props.createCommentAxios(comment, idFilm, this.props.jwt).then(this.setState({ value: '' }));
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleRoute = event => {
    event.target.playVideoAt(50);
  };

  render() {
    if (this.props.jwt === null) {
      this.props.history.push('/');
    }
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
  createCommentAxios: (comment, id, ownToken) => dispatch(createCommentAxios(comment, id, ownToken)),
  getFilmAxios: (id, ownToken) => dispatch(getFilmAxios(id, ownToken)),
  getCommentAxios: (id, ownToken) => dispatch(getCommentAxios(id, ownToken)),
  createRatingAxios: (rating, id, ownToken) => dispatch(createRatingAxios(rating, id, ownToken)),
  getRaitingAxios: (id, ownToken) => dispatch(getRaitingAxios(id, ownToken)),
});

CurrentFilmContainer.propTypes = {
  match: PropTypes.any,
  history: PropTypes.any,
  getFilmAxios: PropTypes.func,
  getCommentAxios: PropTypes.func,
  createCommentAxios: PropTypes.func,
  createRatingAxios: PropTypes.func,
  getRaitingAxios: PropTypes.func,
  rating: PropTypes.any,
  films: PropTypes.any,
  comments: PropTypes.any,
  mail: PropTypes.string,
  jwt: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentFilmContainer);
