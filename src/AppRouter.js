import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import NotFound from './containers/NotFoundContaner';
import LoginReduxForm from './containers/LoginReduxFormContainer';
import RegistrationForm from './containers/RegistrationFormContainer';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginReduxForm} />
      <Route path="/registration" component={RegistrationForm} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default AppRouter;
