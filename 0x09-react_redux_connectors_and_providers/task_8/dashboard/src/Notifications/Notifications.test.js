import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Notifications from './Notifications';
import * as actions from './notificationActionCreators';
import { fromJS } from 'immutable';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Notifications Component', () => {
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

    jest.spyOn(actions, 'setNotificationFilter').mockImplementation((filter) => ({ type: 'SET_NOTIFICATION_FILTER', payload: filter }));
  });

  it('should dispatch setNotificationFilter with "urgent" when the first button is clicked', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    fireEvent.click(screen.getByText('‼️'));
    expect(actions.setNotificationFilter).toHaveBeenCalledWith('urgent');
  });

  it('should dispatch setNotificationFilter with "default" when the second button is clicked', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    fireEvent.click(screen.getByText('💠'));
    expect(actions.setNotificationFilter).toHaveBeenCalledWith('default');
  });
});
