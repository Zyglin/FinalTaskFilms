/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TodoListItem = () => {
  const todo = useSelector(state => state && state.login && state.login.jwt);
  return todo;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const jwt = TodoListItem();
  return <Route {...rest} render={props => (jwt ? <Component {...props} /> : <Redirect to="/" />)} />;
};

export default PrivateRoute;
