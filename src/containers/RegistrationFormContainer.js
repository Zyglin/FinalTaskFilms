import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import RegistrationReduxFormView from '../views/RegistrationReduxForm';
import { fetchRegisterPosts } from '../actions';

class RegistrationReduxFormContainer extends React.Component {
  handleSubmit = values => {
    this.props.fetchRegisterPosts(values).then(resp => {
      if (resp.ok) {
        this.props.history.push('/');
      }
    });
  };

  render() {
    return <RegistrationReduxFormView onSubmit={this.handleSubmit} mail={this.props.emailValue} password={this.props.passwordValue} />;
  }
}

RegistrationReduxFormContainer.propTypes = {
  history: PropTypes.any,
  fetchRegisterPosts: PropTypes.func,
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    fetchRegisterPosts: values => dispatch(fetchRegisterPosts(values)),
  };
}

function mapStateToProps(state) {
  const selector = formValueSelector('registration');
  const emailValue = selector(state, 'Email');
  const passwordValue = selector(state, 'Password');
  const confirmPasswordValue = selector(state, 'ConfirmPassword');
  return {
    emailValue,
    passwordValue,
    confirmPasswordValue,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationReduxFormContainer);
