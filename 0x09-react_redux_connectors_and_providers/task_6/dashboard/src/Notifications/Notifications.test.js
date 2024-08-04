import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Notifications from './Notifications';
import * as actions from './notificationActionCreators';

const mockStore = configureStore([]);
const unreadNotifications = [
  { id: 1, message: 'Unread Notification 1', isRead: false },
  { id: 2, message: 'Unread Notification 2', isRead: false }
];

describe('Notifications', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      notifications: { messages: unreadNotifications }
    });
    jest.spyOn(actions, 'fetchNotifications').mockImplementation(() => ({ type: 'FETCH_NOTIFICATIONS' }));
    jest.spyOn(actions, 'markAsRead').mockImplementation((id) => ({ type: 'MARK_AS_READ', payload: id }));
  });

  it('renders unread notifications list', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    expect(screen.getByText('Unread Notification 1')).toBeInTheDocument();
    expect(screen.getByText('Unread Notification 2')).toBeInTheDocument();
  });

  it('calls fetchNotifications when component is mounted', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    expect(actions.fetchNotifications).toHaveBeenCalled();
  });

  it('calls markAsRead when "Mark as read" button is clicked', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    fireEvent.click(screen.getAllByText('Mark as read')[0]);
    expect(actions.markAsRead).toHaveBeenCalledWith(1);
  });
});
