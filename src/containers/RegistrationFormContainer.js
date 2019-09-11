import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import RegistrationReduxFormView from '../views/RegistrationReduxForm';

class RegistrationReduxFormContainer extends React.Component {
  handleSubmit = values => {
    this.props.history.push('');
  };

  render() {
    return <RegistrationReduxFormView onSubmit={this.handleSubmit} mail={this.props.emailValue} password={this.props.passwordValue} />;
  }
}

RegistrationReduxFormContainer.propTypes = {
  history: PropTypes.any,
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
};

function mapStateToProps(state) {
  const selector = formValueSelector('registration');
  const emailValue = selector(state, 'email');
  const passwordValue = selector(state, 'password');
  return {
    emailValue,
    passwordValue,
  };
}

export default connect(mapStateToProps)(RegistrationReduxFormContainer);
