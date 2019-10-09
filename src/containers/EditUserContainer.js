/* eslint-disable no-multi-assign */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditUserView from '../views/EditUser';
import { editUserRequest } from '../actions';
import { fullNameSelector, numberSelector, jwtSelector } from '../selectors';

class EditUserContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      correctFile: null,
    };
  }

  handleDrop = files => {
    this.setState({ file: files });
    if (files[0].type.split('/')[0] === 'image') {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onloadend = () => {
        this.setState({ correctFile: reader.result });
      };
    } else {
      this.setState({ correctFile: null });
    }
  };

  handleSubmit = values => {
    console.log(values);
    const jwt = { jwt: this.props.jwt, Filebase64: this.state.correctFile };
    const obj = Object.assign(values, jwt);
    console.log(obj);
    this.props.editUserRequest(obj);
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
