import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import LoginReduxFormView from '../views/LoginReduxForm';

class LoginReduxFormContainer extends React.Component {
  handleSubmit = values => {
    this.props.history.push('');
  };

  handleRoute = () => {
    this.props.history.push('/registration');
  };

  render() {
    return <LoginReduxFormView onSubmit={this.handleSubmit} onHandleRoute={this.handleRoute} mail={this.props.emailValue} password={this.props.passwordValue} />;
  }
}

LoginReduxFormContainer.propTypes = {
  history: PropTypes.any,
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
};

function mapStateToProps(state) {
  const selector = formValueSelector('login');
  const emailValue = selector(state, 'email');
  const passwordValue = selector(state, 'password');
  return {
    emailValue,
    passwordValue,
  };
}

export default connect(mapStateToProps)(LoginReduxFormContainer);
