import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginReduxFormView from '../views/LoginForm';
import { jwtSelector } from '../selectors';
import { loginRequest } from '../actions';

class LoginFormContainer extends React.PureComponent {
  componentDidUpdate() {
    if (this.props.jwt) {
      this.props.history.push('/main');
    }
  }

  handleSubmit = values => {
    this.props.loginRequest(values);
  };

  handleRoute = () => {
    this.props.history.push('/registration');
  };

  render() {
    return <LoginReduxFormView onSubmit={this.handleSubmit} onHandleRoute={this.handleRoute} />;
  }
}

LoginFormContainer.propTypes = {
  loginRequest: PropTypes.func,
  history: PropTypes.any,
  jwt: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    jwt: jwtSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginRequest: values => dispatch(loginRequest(values)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
