import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegistrationReduxFormView from '../views/RegistrationReduxForm';
import { axiosRegisterPosts } from '../actions';

class RegistrationReduxFormContainer extends React.PureComponent {
  handleSubmit = values => {
    this.props.axiosRegisterPosts(values).then(resp => {
      if (resp.status === 200) {
        this.props.history.push('/');
      }
    });
  };

  render() {
    return <RegistrationReduxFormView onSubmit={this.handleSubmit} />;
  }
}

RegistrationReduxFormContainer.propTypes = {
  history: PropTypes.any,
  axiosRegisterPosts: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    axiosRegisterPosts: values => dispatch(axiosRegisterPosts(values)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(RegistrationReduxFormContainer);
