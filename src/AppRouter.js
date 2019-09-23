import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import NotFound from './containers/NotFoundContaner';
import LoginReduxForm from './containers/LoginReduxFormContainer';
import RegistrationForm from './containers/RegistrationFormContainer';
import MainRedux from './containers/MainReduxContainer';
import FilmRedux from './containers/FilmsReduxContainer';
import CurrentFilm from './containers/CurrentFilmContainer';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginReduxForm} />
      <Route exact path="/registration" component={RegistrationForm} />
      <Route
        exact
        path="/main"
        render={props => (
          <div>
            <MainRedux {...props} />
            <FilmRedux {...props} />
          </div>
        )}
      />
      <Route
        path="/:id"
        render={props => {
          return (
            <div>
              <MainRedux {...props} />
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
