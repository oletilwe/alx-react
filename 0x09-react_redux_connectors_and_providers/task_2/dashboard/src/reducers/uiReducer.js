import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionCreators';

const initialState = {
  isLoggedIn: false,
  isNotificationDrawerVisible: false,
  loading: false,
  user: null,
  error: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        user: action.payload, // Set user to the one passed in the action
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null, // Set user to null on logout
      };
    default:
      return state;
  }
};

export default uiReducer;
