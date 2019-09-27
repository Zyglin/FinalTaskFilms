import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmListView from '../views/FilmList';
import { filmSelector, jwtSelector } from '../selectors';
import { getFilmsAxios } from '../actions';

class FilmsListContainer extends React.PureComponent {
  componentDidMount = () => {
    if (this.props.jwt === null) {
      this.props.history.push('/');
    } else {
      console.log(this.props.jwt);
      this.props.getFilmsAxios(this.props.jwt);
    }
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
  history: PropTypes.any,
  getFilmsAxios: PropTypes.func,
  films: PropTypes.any,
  jwt: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsListContainer);
