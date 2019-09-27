import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { jwtSelector } from '../selectors';
import PrivateRouteView from '../PrivateRoute';

class PrivateRouteContainer extends React.PureComponent {
  render() {
    return <PrivateRouteView jwt={this.props.jwt} />;
  }
}

function mapStateToProps(state) {
  return {
    jwt: jwtSelector(state),
  };
}

PrivateRouteContainer.propTypes = {
  jwt: PropTypes.string,
};

export default connect(mapStateToProps)(PrivateRouteContainer);
