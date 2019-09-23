import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmListView from '../views/FilmList';
import { getFilmsFetch } from '../actions';

class FilmsListContainer extends React.Component {
  componentDidMount = () => {
    if (localStorage.getItem('token') === null) {
      this.props.history.push('/');
    } else {
      this.props.getFilmsFetch();
    }
  };

  render() {
    return <FilmListView films={this.props.films} />;
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

FilmsListContainer.propTypes = {
  history: PropTypes.any,
  getFilmsFetch: PropTypes.func,
  films: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsListContainer);
