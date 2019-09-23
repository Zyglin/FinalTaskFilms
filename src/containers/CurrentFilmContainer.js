/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentFilmView from '../views/CurrentFilm';
import { getFilmFetch, createCommentFetch, getCommentFetch } from '../actions';

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
      console.log(this.props);
      const idFilm = this.props.match.params.id;
      this.props.getFilmFetch(idFilm);
      this.props.getCommentFetch(idFilm);
    }
  };

  // componentWillReceiveProps() {
  //   const idFilm = this.props.match.params.id;
  //   this.props.getCommentFetch(idFilm);
  // }

  handleSendComment = () => {
    console.log(this.state.value);
    const comment = {
      Description: this.state.value,
      FilmId: this.props.match.params.id,
    };
    const idFilm = this.props.match.params.id;
    this.props
      .createCommentFetch(comment, idFilm)
      // .then(this.props.getCommentFetch(idFilm))
      .then(this.setState({ value: '' }));
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
        commentValue={this.state.value}
        onHandleRoute={this.handleRoute}
        onHandleChangeStateComment={this.handleChange}
        onHandleSendComment={this.handleSendComment}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    films: state.loginFetch.filmReducer,
    comments: state.loginFetch.commentReducer,
  };
}

const mapDispatchToProps = dispatch => ({
  createCommentFetch: (comment, id) => dispatch(createCommentFetch(comment, id)),
  getFilmFetch: id => dispatch(getFilmFetch(id)),
  getCommentFetch: id => dispatch(getCommentFetch(id)),
});

CurrentFilmContainer.propTypes = {
  match: PropTypes.any,
  history: PropTypes.any,
  getFilmFetch: PropTypes.func,
  getCommentFetch: PropTypes.func,
  createCommentFetch: PropTypes.func,
  films: PropTypes.any,
  comments: PropTypes.any,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentFilmContainer);
