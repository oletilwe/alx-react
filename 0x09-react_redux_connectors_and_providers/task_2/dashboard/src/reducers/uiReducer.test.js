import uiReducer from './uiReducer';
import { LOGIN_SUCCESS, LOGOUT } from '../actions/uiActionCreators';

describe('uiReducer', () => {
  it('should handle LOGIN_SUCCESS', () => {
    const user = { name: 'John Doe' };
    const action = {
      type: LOGIN_SUCCESS,
      payload: user,
    };
    const expectedState = {
      isLoggedIn: true,
      isNotificationDrawerVisible: false,
      loading: false,
      user: user,
      error: null,
    };
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT', () => {
    const action = {
      type: LOGOUT,
    };
    const initialState = {
      isLoggedIn: true,
      isNotificationDrawerVisible: false,
      loading: false,
      user: { name: 'John Doe' },
      error: null,
    };
    const expectedState = {
      isLoggedIn: false,
      isNotificationDrawerVisible: false,
      loading: false,
      user: null,
      error: null,
    };
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });
});

