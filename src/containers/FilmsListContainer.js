import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmListView from '../views/FilmList';
import { filmSelector } from '../selectors';
import { filmsRequest } from '../actions';

class FilmsListContainer extends React.PureComponent {
  componentDidMount = () => {
    this.props.filmsRequest();
  };

  render() {
    return <FilmListView films={this.props.films} />;
  }
}

function mapStateToProps(state) {
  return {
    films: filmSelector(state),
  };
}

const mapDispatchToProps = dispatch => ({
  filmsRequest: () => dispatch(filmsRequest()),
});

FilmsListContainer.propTypes = {
  filmsRequest: PropTypes.func,
  films: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsListContainer);
