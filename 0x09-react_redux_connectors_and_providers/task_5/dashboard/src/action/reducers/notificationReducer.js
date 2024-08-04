import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionCreators';
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

    default:
      return state;
  }
};

export default notificationReducer;
