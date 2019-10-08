/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-mutable-exports */
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, Form } from 'redux-form';
import Button from '@material-ui/core/Button';
import FileDrop from 'react-file-drop';
import renderTextField from '../RenderTextField';
import useStyles from './style';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or less` : undefined);
const phoneNumber = value => (value && !/^[+]+[0-9]{12}$/.test(value) ? 'Invalid Phone number' : undefined);
const minLength6 = minLength(6);
const minLength12 = minLength(12);

const editUserView = props => {
  const classes = useStyles();
  const { handleSubmit, imageExist } = props;
  const textForDND = () => {
    const result = imageExist === null ? 'Drop avatar for user here!' : imageExist[0].type.split('/')[0] !== 'image' ? 'Wrong file format' : `Avatar uploaded ${imageExist[0].name}`;
    return result;
  };
  console.log(props);
  return (
    <div className={classes.container}>
      <Form className={classes.form} onSubmit={handleSubmit}>
        <FileDrop name="FileAvatar" className={classes.dragAndDrop} onDrop={props.onHandleDrop}>
          {textForDND()}
        </FileDrop>

        <div>
          <Field className={classes.textField} name="FullName" label="FullName" data={props.fullName} component={renderTextField} type="text" validate={[required, minLength12]} />
        </div>
        <div>
          <Field className={classes.textField} name="PhoneNumber" label="PhoneNumber" data={props.number} component={renderTextField} type="tel" validate={[required, phoneNumber]} />
        </div>
        <div>
          <Field className={classes.textField} name="OldPassword" label="Old Password" component={renderTextField} type="password" validate={[required, minLength6]} />
        </div>
        <div>
          <Field className={classes.textField} name="NewPassword" label="New Password" component={renderTextField} type="password" validate={[required, minLength6]} />
        </div>
        <div>
          <Button type="submit" className={classes.button} variant="contained" color="primary">
            Update data user
          </Button>
        </div>
      </Form>
    </div>
  );
};

editUserView.propTypes = {
  onHandleDrop: PropTypes.func,
  handleSubmit: PropTypes.func,
  fullName: PropTypes.string,
  number: PropTypes.string,
  imageExist: PropTypes.any,
};

let EditUserForm = editUserView;

EditUserForm = reduxForm({
  form: 'editUser',
})(EditUserForm);

export default EditUserForm;
