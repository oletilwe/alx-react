import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ } from './notificationActionCreators';
import { mergeDeep } from 'lodash';

const initialState = {
  loading: false,
  notifications: {}
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return {
        ...state,
        loading: action.payload,
      };

    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: mergeDeep(state.notifications, action.payload),
      };

    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.payload ? { ...notification, isRead: true } : notification
        )
      };

    default:
      return state;
  }
};

export default notificationReducer;
