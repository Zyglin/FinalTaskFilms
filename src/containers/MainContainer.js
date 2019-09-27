import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainView from '../views/MainRedux';
import { jwtSelector, mailSelector } from '../selectors';
import { logoutUser } from '../actions';

class MainContainer extends React.PureComponent {
  handleClick = event => {
    event.preventDefault();
    this.props.logoutUser();
    this.props.history.push('/');
  };

  render() {
    if (this.props.jwt === null) {
      this.props.history.push('/');
    }
    return <MainView onHandleClick={this.handleClick} mail={this.props.mail} />;
  }
}
const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
});

function mapStateToProps(state) {
  return {
    jwt: jwtSelector(state),
    mail: mailSelector(state),
  };
}

MainContainer.propTypes = {
  history: PropTypes.any,
  logoutUser: PropTypes.func,
  jwt: PropTypes.string,
  mail: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
