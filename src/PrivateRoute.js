/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = (props, { component: Component, ...rest }) => (
  <Route {...rest} render={prop => (props.jwt !== null ? <Component {...prop} /> : <Redirect to={{ pathname: '/login', state: { from: prop.location } }} />)} />
);

export default PrivateRoute;
