import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from './actions/uiActionCreators';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;
    return (
      <div>
        {isLoggedIn ? <p>User is logged in</p> : <p>User is not logged in</p>}
        {displayDrawer ? (
          <p>Notification drawer is visible</p>
        ) : (
          <p>Notification drawer is hidden</p>
        )}
        <button onClick={displayNotificationDrawer}>Show Drawer</button>
        <button onClick={hideNotificationDrawer}>Hide Drawer</button>
      </div>
    );
  }
}

// Define propTypes
App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

// Define defaultProps
App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

// Define mapStateToProps function
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.isLoggedIn,
    displayDrawer: state.uiReducer.isNotificationDrawerVisible,
  };
};

// Define mapDispatchToProps function
const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

// Connect mapStateToProps and mapDispatchToProps to App
export default connect(mapStateToProps, mapDispatchToProps)(App);

