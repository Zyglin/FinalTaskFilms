/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import NotFound from './containers/NotFoundContaner';
import PrivateRoute from './PrivateRoute';
import LoginForm from './containers/LoginFormContainer';
import RegistrationForm from './containers/RegistrationFormContainer';
import Main from './containers/MainContainer';
import FilmList from './containers/FilmsListContainer';
import CurrentFilm from './containers/CurrentFilmContainer';
import EditUser from './containers/EditUserContainer';
import useStyles from './style';

const Layout = props => {
  console.log(props);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Main {...props} />
      {props.children}
    </div>
  );
};

const AppRouter = () => {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/registration" component={RegistrationForm} />
        <PrivateRoute
          exact
          path="/main"
          component={props => (
            <Layout {...props}>
              <FilmList {...props} />
            </Layout>
          )}
        />
        <PrivateRoute
          exact
          path="/editUser"
          component={props => {
            return (
              <Layout {...props}>
                <EditUser {...props} />
              </Layout>
            );
          }}
        />
        <PrivateRoute
          path="/:id"
          component={props => {
            return (
              <Layout {...props}>
                <CurrentFilm {...props} />
              </Layout>
            );
          }}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};
export default AppRouter;
