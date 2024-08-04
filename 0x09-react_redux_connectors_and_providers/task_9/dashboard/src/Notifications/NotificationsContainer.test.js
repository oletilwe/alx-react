import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import NotificationsContainer from './NotificationsContainer';
import * as actions from './notificationActionCreators';
import { fromJS } from 'immutable';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('NotificationsContainer Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      notifications: {
        messages: fromJS([
          { id: '1', message: 'Notification 1', isRead: false, isUrgent: false },
          { id: '2', message: 'Notification 2', isRead: false, isUrgent: true }
        ]),
        filter: 'default'
      }
    });

    jest.spyOn(actions, 'fetchNotifications').mockImplementation(() => ({ type: 'FETCH_NOTIFICATIONS' }));
  });

  it('should dispatch fetchNotifications on mount', () => {
    render(
      <Provider store={store}>
        <NotificationsContainer />
      </Provider>
    );

    const actionsDispatched = store.getActions();
    expect(actionsDispatched).toContainEqual({ type: 'FETCH_NOTIFICATIONS' });
  });
});
