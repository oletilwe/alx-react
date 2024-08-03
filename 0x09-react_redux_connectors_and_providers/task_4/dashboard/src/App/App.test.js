import React from 'react';
import { shallow } from 'enzyme';
import App from './App'; // Import the stateless App component
import { mapStateToProps, mapDispatchToProps } from './App'; // Import mapStateToProps and mapDispatchToProps

describe('App Component', () => {
  const defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
    loading: false,
    user: null,
    error: null,
    displayNotificationDrawer: jest.fn(),
    hideNotificationDrawer: jest.fn(),
    login: jest.fn(),
    logout: jest.fn(),
  };

  it('should render correctly with default props', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  // Test mapStateToProps
  it('should map state to props correctly', () => {
    const state = {
      ui: {
        isLoggedIn: true,
        isNotificationDrawerVisible: true,
        loading: false,
        user: { name: 'John Doe' },
        error: null,
      },
      courses: {}, // Assume other state slices are present
      notifications: {}, // Assume other state slices are present
    };
    expect(mapStateToProps(state)).toEqual({
      isLoggedIn: true,
      displayDrawer: true,
      loading: false,
      user: { name: 'John Doe' },
      error: null,
    });
  });

  // Test mapDispatchToProps
  it('should map dispatch to props correctly', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).displayNotificationDrawer();
    expect(dispatch).toHaveBeenCalledWith({ type: 'DISPLAY_NOTIFICATION_DRAWER' });
  });
});

