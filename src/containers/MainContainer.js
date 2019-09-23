import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainView from '../views/MainRedux';
import { logoutUser } from '../actions';

class MainContainer extends React.Component {
  componentDidMount = () => {
    if (localStorage.getItem('token') === null) {
      this.props.history.push('/');
    }
    // else {
    //   this.props.getFilmsFetch();
    // }
  };

  handleClick = event => {
    event.preventDefault();
    localStorage.removeItem('token');
    this.props.logoutUser();
    this.props.history.push('/');
  };

  render() {
    return <MainView mail={this.props.mail} onHandleClick={this.handleClick} />;
  }
}

function mapStateToProps(state) {
  return {
    mail: state.loginFetch.data,
  };
}

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
});

MainContainer.propTypes = {
  history: PropTypes.any,
  mail: PropTypes.any,
  logoutUser: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
