import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { fromJS } from 'immutable';

describe('Notifications Component', () => {
  const props = {
    notifications: fromJS([
      { id: '1', message: 'Notification 1', isRead: false, isUrgent: false },
      { id: '2', message: 'Notification 2', isRead: false, isUrgent: true }
    ]),
    filter: 'default',
    setNotificationFilter: jest.fn()
  };

  it('should render notifications and filter buttons', () => {
    render(<Notifications {...props} />);

    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
    expect(screen.getByText('‼️')).toBeInTheDocument();
    expect(screen.getByText('💠')).toBeInTheDocument();
    expect(screen.getByText('Notification 1')).toBeInTheDocument();
    expect(screen.getByText('Notification 2')).toBeInTheDocument();
  });

  it('should call setNotificationFilter with "urgent" when the first button is clicked', () => {
    render(<Notifications {...props} />);

    fireEvent.click(screen.getByText('‼️'));
    expect(props.setNotificationFilter).toHaveBeenCalledWith('urgent');
  });

  it('should call setNotificationFilter with "default" when the second button is clicked', () => {
    render(<Notifications {...props} />);

    fireEvent.click(screen.getByText('💠'));
    expect(props.setNotificationFilter).toHaveBeenCalledWith('default');
  });
});
