import React from 'react';
import { connect } from 'react-redux';
import MyComponent from './MyComponent';

// Define mapStateToProps function
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.isLoggedIn,
  };
};

// Connect mapStateToProps to MyComponent
const ConnectedComponent = connect(mapStateToProps)(MyComponent);

// Export the connected component
export default ConnectedComponent;
