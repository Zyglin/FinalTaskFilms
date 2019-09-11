/* eslint-disable import/no-mutable-exports */
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import renderTextField from '../RenderTextField';
import useStyles from './style';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined);
const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or less` : undefined);
const minLength6 = minLength(6);

const LoginReduxFormView = props => {
  const classes = useStyles();
  const { handleSubmit, onHandleRoute } = props;
  return (
    <div className={classes.div}>
      <form className={classes.container} onSubmit={handleSubmit}>
        <div>
          <Field className={classes.textField} name="email" component={renderTextField} label="Email" type="email" validate={[required, email]} />
        </div>
        <div>
          <Field className={classes.textField} name="password" label="Password" component={renderTextField} type="password" validate={[required, minLength6]} />
        </div>
        <div>
          <Button className={classes.button} type="submit" variant="contained" color="secondary">
            Login
            <LockOpenIcon className={classes.rightIcon} />
          </Button>
          <Button className={classes.button} onClick={onHandleRoute} variant="contained" color="primary">
            Registration
            <SupervisedUserCircleIcon className={classes.rightIcon} />
          </Button>
        </div>
      </form>
    </div>
  );
};

LoginReduxFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onHandleRoute: PropTypes.func.isRequired,
};

let LoginRedForm = LoginReduxFormView;

LoginRedForm = reduxForm({
  form: 'login',
})(LoginRedForm);

export default LoginRedForm;
