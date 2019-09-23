import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import LoginReduxFormView from '../views/LoginReduxForm';
import { fetchPosts } from '../actions';

class LoginReduxFormContainer extends React.Component {
  handleSubmit = values => {
    this.props.fetchPosts(values).then(() => {
      if (localStorage.getItem('token') !== null) {
        this.props.history.push('/main');
      }
    });
  };

  handleRoute = () => {
    this.props.history.push('/registration');
  };

  render() {
    return <LoginReduxFormView onSubmit={this.handleSubmit} onHandleRoute={this.handleRoute} mail={this.props.emailValue} password={this.props.passwordValue} />;
  }
}

LoginReduxFormContainer.propTypes = {
  fetchPosts: PropTypes.any,
  history: PropTypes.any,
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
};
function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: values => dispatch(fetchPosts(values)),
  };
}

function mapStateToProps(state) {
  const selector = formValueSelector('login');
  const emailValue = selector(state, 'Email');
  const passwordValue = selector(state, 'Password');
  return {
    emailValue,
    passwordValue,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginReduxFormContainer);
