import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './notificationActionCreators';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('notificationActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates SET_LOADING_STATE action', () => {
    const expectedAction = {
      type: actions.SET_LOADING_STATE,
      payload: true
    };
    expect(actions.setLoadingState(true)).toEqual(expectedAction);
  });

  it('creates FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const notifications = [{ id: 1, message: 'test' }];
    const expectedAction = {
      type: actions.FETCH_NOTIFICATIONS_SUCCESS,
      payload: notifications
    };
    expect(actions.setNotifications(notifications)).toEqual(expectedAction);
  });

  it('dispatches actions to fetch notifications', () => {
    const notifications = [{ id: 1, message: 'test' }];
    fetchMock.getOnce('/notifications.json', {
      body: notifications,
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: actions.SET_LOADING_STATE, payload: true },
      { type: actions.FETCH_NOTIFICATIONS_SUCCESS, payload: notifications },
      { type: actions.SET_LOADING_STATE, payload: false }
    ];
    const store = mockStore({ notifications: {} });

    return store.dispatch(actions.fetchNotifications()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
