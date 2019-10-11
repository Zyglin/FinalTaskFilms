import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const jwt = useSelector(state => state && state.login && state.login.jwt);
  return <Route {...rest} render={props => (jwt ? <Component {...props} /> : <Redirect to="/" />)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
