import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmReduxView from '../views/FilmRedux';
import { getFilmsFetch } from '../actions';

class FilmsReduxContainer extends React.Component {
  componentDidMount = () => {
    if (localStorage.getItem('token') === null) {
      this.props.history.push('/');
    } else {
      this.props.getFilmsFetch();
    }
  };

  render() {
    return <FilmReduxView films={this.props.films} />;
  }
}

function mapStateToProps(state) {
  return {
    films: state.loginFetch.filmReducer,
  };
}

const mapDispatchToProps = dispatch => ({
  getFilmsFetch: () => dispatch(getFilmsFetch()),
});

FilmsReduxContainer.propTypes = {
  history: PropTypes.any,
  getFilmsFetch: PropTypes.func,
  films: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsReduxContainer);
