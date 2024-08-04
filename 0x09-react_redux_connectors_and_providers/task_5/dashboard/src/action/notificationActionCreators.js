export const SET_LOADING_STATE = 'SET_LOADING_STATE';
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS'
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './actionTypes';

// Action creator for setting the loading state
export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  payload: isLoading,
});

// Action creator for setting notifications
export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  payload: notifications,
});

// Thunk action creator for fetching notifications
export const fetchNotifications = () => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));

    try {
      const response = await fetch('/notifications.json');
      const data = await response.json();
      dispatch(setNotifications(data));
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    } finally {
      dispatch(setLoadingState(false));
    }
  };
};
