import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Notifications from './Notifications';
import * as actions from './notificationActionCreators';

const mockStore = configureStore([]);
const notifications = [
  { id: 1, message: 'Notification 1' },
  { id: 2, message: 'Notification 2' }
];

describe('Notifications', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      notifications: { messages: notifications }
    });
    jest.spyOn(actions, 'fetchNotifications').mockImplementation(() => ({ type: 'FETCH_NOTIFICATIONS' }));
  });

  it('renders notifications list', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    expect(screen.getByText('Notification 1')).toBeInTheDocument();
    expect(screen.getByText('Notification 2')).toBeInTheDocument();
  });

  it('calls fetchNotifications when component is mounted', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    expect(actions.fetchNotifications).toHaveBeenCalled();
  });
});
