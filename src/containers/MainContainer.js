import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainView from '../views/MainRedux';
import { mailSelector } from '../selectors';
import { logOut } from '../actions';

class MainContainer extends React.PureComponent {
  handleClick = event => {
    event.preventDefault();
    this.props.logOut();
    this.props.history.push('/');
  };

  handleClickCabinet = event => {
    this.props.history.push('/editUser');
  };

  render() {
    return <MainView onHandleClick={this.handleClick} mail={this.props.mail} onHandleClickCabinet={this.handleClickCabinet} />;
  }
}
const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
});

function mapStateToProps(state) {
  return {
    mail: mailSelector(state),
  };
}

MainContainer.propTypes = {
  history: PropTypes.any,
  logOut: PropTypes.func,
  mail: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
