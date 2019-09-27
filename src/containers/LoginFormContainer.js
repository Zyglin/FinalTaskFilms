import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginReduxFormView from '../views/LoginForm';
import { jwtSelector } from '../selectors';
import { axiosPosts } from '../actions';

class LoginFormContainer extends React.PureComponent {
  handleSubmit = values => {
    this.props.axiosPosts(values).then(() => {
      if (this.props.jwt !== null) {
        this.props.history.push('/main');
      }
    });
  };

  handleRoute = () => {
    this.props.history.push('/registration');
  };

  render() {
    return <LoginReduxFormView onSubmit={this.handleSubmit} onHandleRoute={this.handleRoute} />;
  }
}

LoginFormContainer.propTypes = {
  axiosPosts: PropTypes.any,
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
    axiosPosts: values => dispatch(axiosPosts(values)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
