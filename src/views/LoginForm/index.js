import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, Form } from 'redux-form';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import renderTextField from '../RenderTextField';
import useStyles from './style';
import { required, email, minLength6 } from '../../validation';

const LoginFormView = props => {
  const classes = useStyles();
  const { handleSubmit, onHandleRoute } = props;
  return (
    <div className={classes.div}>
      <Form className={classes.container} onSubmit={handleSubmit}>
        <div>
          <Field className={classes.textField} name="Email" component={renderTextField} label="Email" type="email" validate={[required, email]} />
        </div>
        <div>
          <Field className={classes.textField} name="Password" label="Password" component={renderTextField} type="password" validate={[required, minLength6]} />
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
      </Form>
    </div>
  );
};

LoginFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onHandleRoute: PropTypes.func.isRequired,
};

let LoginRedForm = LoginFormView;

LoginRedForm = reduxForm({
  form: 'login',
})(LoginRedForm);

export default LoginRedForm;
