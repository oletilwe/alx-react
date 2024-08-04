import notificationReducer from './notificationReducer';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionCreators';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
  const initialState = {
    loading: false,
    notifications: {}
  };

  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_LOADING_STATE', () => {
    const action = {
      type: SET_LOADING_STATE,
      payload: true
    };
    const expectedState = {
      ...initialState,
      loading: true
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const notifications = { message1: 'test1', message2: 'test2' };
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      payload: notifications
    };
    const expectedState = {
      ...initialState,
      notifications
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});
