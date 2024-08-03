import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { displayNotificationDrawer, hideNotificationDrawer, loginUser, logout } from './actions/uiActionCreators';
import MyComponent from './MyComponent';

// Define mapStateToProps function
export const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  displayDrawer: state.isNotificationDrawerVisible,
  loading: state.loading,
  user: state.user,
  error: state.error,
});

// Define mapDispatchToProps function
const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginUser,
  logout,
};

// Connect mapStateToProps and mapDispatchToProps to MyComponent
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(MyComponent);

// Export the connected component
export default ConnectedComponent;

