import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Footer = ({ user }) => {
  return (
    <div>
      <p>Footer content goes here</p>
      {user && <p>Logged in as: {user.name}</p>}
    </div>
  );
};

// Define propTypes
Footer.propTypes = {
  user: PropTypes.object,
};

// Define defaultProps
Footer.defaultProps = {
  user: null,
};

// Define mapStateToProps function
const mapStateToProps = (state) => ({
  user: state.user,
});

// Connect the component to the Redux store
export default connect(mapStateToProps)(Footer);

