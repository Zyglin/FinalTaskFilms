import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegistrationReduxFormView from '../views/RegistrationReduxForm';
import { registerRequest } from '../actions';
import { loginSelector } from '../selectors';

class RegistrationReduxFormContainer extends React.PureComponent {
  handleSubmit = values => {
    this.props.registerRequest(values);
    if (this.props.registerStatus === 200) {
      this.props.history.push('/');
    }
  };

  render() {
    return <RegistrationReduxFormView onSubmit={this.handleSubmit} />;
  }
}

RegistrationReduxFormContainer.propTypes = {
  history: PropTypes.any,
  registerRequest: PropTypes.func,
  registerStatus: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    registerStatus: loginSelector(state),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    registerRequest: values => dispatch(registerRequest(values)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationReduxFormContainer);
