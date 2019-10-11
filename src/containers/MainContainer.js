import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainView from '../views/MainRedux';
import { mailSelector, imageSelector } from '../selectors';
import { logOut, CommentsClean } from '../actions';

class MainContainer extends React.PureComponent {
  handleClick = event => {
    event.preventDefault();
    this.props.logOut();
    this.props.history.push('/');
  };

  handleClickCabinet = event => {
    this.props.history.push('/editUser');
  };

  handleClickMenu = event => {
    this.props.CommentsClean();
    this.props.history.push('/main');
  };

  render() {
    return <MainView onHandleClick={this.handleClick} onHandleClickMenu={this.handleClickMenu} avatar={this.props.avatar} mail={this.props.mail} onHandleClickCabinet={this.handleClickCabinet} />;
  }
}
const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  CommentsClean: () => dispatch(CommentsClean()),
});

function mapStateToProps(state) {
  return {
    mail: mailSelector(state),
    avatar: imageSelector(state),
  };
}

MainContainer.propTypes = {
  history: PropTypes.any,
  logOut: PropTypes.func.isRequired,
  mail: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  CommentsClean: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
