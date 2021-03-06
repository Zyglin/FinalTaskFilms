import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import renderTextField from '../RenderTextField';
import useStyles from './style';
import { required, email, phoneNumber, minLength12, minLength6, matchPassword } from '../../validation';

const RegistrationReduxFormView = props => {
  const classes = useStyles();
  const { handleSubmit } = props;
  return (
    <div className={classes.div}>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div>
            {props.mail}
            <Field className={classes.textField} name="Email" component={renderTextField} label="Email" type="email" validate={[required, email]} />
          </div>
          <div>
            <Field className={classes.textField} name="FullName" label="FullName" component={renderTextField} type="text" validate={[required, minLength12]} />
          </div>
          <div>
            <Field className={classes.textField} name="PhoneNumber" label="PhoneNumber" component={renderTextField} type="tel" validate={[required, phoneNumber]} />
          </div>
          <div>
            <Field className={classes.textField} name="Password" label="Password" component={renderTextField} type="password" validate={[required, minLength6]} />
          </div>
          <div>
            <Field className={classes.textField} name="ConfirmPassword" label="Confirm Password" component={renderTextField} type="password" validate={[required, matchPassword]} />
          </div>
          <div>
            <Button type="submit" className={classes.button} variant="contained" color="primary">
              Register
              <SupervisedUserCircleIcon className={classes.rightIcon} />
            </Button>
          </div>
        </form>
        <Link className={classes.link} component={RouterLink} to="/">
          Go to Login
        </Link>
      </div>
    </div>
  );
};

RegistrationReduxFormView.propTypes = {
  mail: PropTypes.any,
  handleSubmit: PropTypes.func.isRequired,
};

let RegisterRedForm = RegistrationReduxFormView;

RegisterRedForm = reduxForm({
  form: 'register',
})(RegisterRedForm);

export default RegisterRedForm;
