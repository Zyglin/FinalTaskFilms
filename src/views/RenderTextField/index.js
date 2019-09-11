import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import useStyles from './style';

const RenderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }) => {
  const classes = useStyles();
  return (
    <TextField
      InputProps={{
        className: classes.textField,
      }}
      InputLabelProps={{
        className: classes.textLabel,
      }}
      variant="outlined"
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
};

RenderTextField.propTypes = {
  input: PropTypes.any,
  label: PropTypes.any,
  type: PropTypes.any,
  meta: PropTypes.any,
};

export default RenderTextField;
