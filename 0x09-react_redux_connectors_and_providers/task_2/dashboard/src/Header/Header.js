import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators'; // Adjust the path if necessary

const Header = ({ user, logout }) => {
  const handleLogout = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    logout();
  };

  return (
    <header>
      <h1>Application Header</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <a href="#" onClick={handleLogout}>Logout</a>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </header>
  );
};

// Define propTypes
Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

// Define defaultProps
Header.defaultProps = {
  user: null,
};

// Define mapStateToProps function
const mapStateToProps = (state) => ({
  user: state.user,
});

// Define mapDispatchToProps function
const mapDispatchToProps = {
  logout,
};

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Header);

