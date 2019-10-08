/* eslint-disable no-multi-assign */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditUserView from '../views/EditUser';
import { editUserRequest } from '../actions';
import { fullNameSelector, numberSelector, jwtSelector } from '../selectors';
// import { loginRequest } from '../actions';

class EditUserContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }

  handleDrop = files => {
    this.setState({ file: files });
  };

  handleSubmit = values => {
    console.log(values);
    const fileImage = this.state.file;
    if (fileImage !== null) {
      if (fileImage[0].type.split('/')[0] === 'image') {
        const reader = new FileReader();
        reader.readAsDataURL(this.state.file[0]);
        reader.onloadend = () => {
          const filebase64 = { Filebase64: reader.result };
          const jwt = { jwt: this.props.jwt };
          const obj = Object.assign(values, filebase64, jwt);
          this.props.editUserRequest(obj);
        };
      }
    }
  };

  render() {
    return (
      <EditUserView
        onHandleDrop={this.handleDrop}
        onHandleFormat={this.handleFormat}
        imageExist={this.state.file}
        onSubmit={this.handleSubmit}
        jwt={this.props.jwt}
        fullName={this.props.fullName}
        number={this.props.number}
      />
    );
  }
}

EditUserContainer.propTypes = {
  fullName: PropTypes.string,
  editUserRequest: PropTypes.func,
  jwt: PropTypes.jwt,
  number: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    jwt: jwtSelector(state),
    fullName: fullNameSelector(state),
    number: numberSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editUserRequest: values => dispatch(editUserRequest(values)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserContainer);
