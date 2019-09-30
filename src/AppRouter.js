import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import NotFound from './containers/NotFoundContaner';
import PrivateRoute from './PrivateRoute';
import LoginForm from './containers/LoginFormContainer';
import RegistrationForm from './containers/RegistrationFormContainer';
import Main from './containers/MainContainer';
import FilmList from './containers/FilmsListContainer';
import CurrentFilm from './containers/CurrentFilmContainer';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/registration" component={RegistrationForm} />
      <PrivateRoute
        exact
        path="/main"
        component={props => (
          <div>
            <Main {...props} />
            <FilmList {...props} />
          </div>
        )}
      />
      <PrivateRoute
        path="/:id"
        component={props => {
          return (
            <div>
              <Main {...props} />
              <CurrentFilm {...props} />
            </div>
          );
        }}
      />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);
export default AppRouter;
