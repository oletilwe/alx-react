import { createStore } from 'redux';
import rootReducer from './rootReducer'; // Import rootReducer

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const store = createStore(rootReducer);
    const expectedInitialState = {
      courses: {}, // Assuming initial state for courses
      notifications: {}, // Assuming initial state for notifications
      ui: {
        isLoggedIn: false,
        isNotificationDrawerVisible: false,
        loading: false,
        user: null,
        error: null,
      },
    };
    expect(store.getState()).toEqual(expectedInitialState);
  });
});

