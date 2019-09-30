import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmListView from '../views/FilmList';
import { filmSelector, jwtSelector } from '../selectors';
import { getFilmsAxios } from '../axios';

class FilmsListContainer extends React.PureComponent {
  componentDidMount = () => {
    this.props.getFilmsAxios(this.props.jwt);
  };

  render() {
    return <FilmListView films={this.props.films} />;
  }
}

function mapStateToProps(state) {
  return {
    films: filmSelector(state),
    jwt: jwtSelector(state),
  };
}

const mapDispatchToProps = dispatch => ({
  getFilmsAxios: ownToken => dispatch(getFilmsAxios(ownToken)),
});

FilmsListContainer.propTypes = {
  getFilmsAxios: PropTypes.func,
  films: PropTypes.array,
  jwt: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsListContainer);
