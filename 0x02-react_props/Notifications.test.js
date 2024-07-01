import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';
import { NotificationItemShape } from './NotificationItemShape';

describe('Notifications component', () => {
  test('renders correctly with empty listNotifications or no listNotifications prop', () => {
    const { queryByText } = render(<Notifications />);
    expect(queryByText('No new notification for now')).toBeInTheDocument();
    expect(queryByText('Here is the list of notifications')).not.toBeInTheDocument();
  });

  test('renders notifications correctly with listNotifications', () => {
    const notifications = [
      {
        id: 1,
        html: null,
        type: 'default',
        value: 'New course available'
      },
      {
        id: 2,
        html: null,
        type: 'info',
        value: 'New resume available'
      }
    ];
    const { queryByText } = render(<Notifications listNotifications={notifications} />);
    expect(queryByText('New course available')).toBeInTheDocument();
    expect(queryByText('New resume available')).toBeInTheDocument();
  });

  test('does not display "Here is the list of notifications" message when listNotifications is empty', () => {
    const { queryByText } = render(<Notifications />);
    expect(queryByText('Here is the list of notifications')).not.toBeInTheDocument();
  });

  test('displays "No new notification for now" when listNotifications is empty', () => {
    const { queryByText } = render(<Notifications />);
    expect(queryByText('No new notification for now')).toBeInTheDocument();
  });

  test('displays the correct number of NotificationItem components with listNotifications', () => {
    const notifications = [
      {
        id: 1,
        html: null,
        type: 'default',
        value: 'New course available'
      },
      {
        id: 2,
        html: null,
        type: 'info',
        value: 'New resume available'
      }
    ];
    const { queryAllByTestId } = render(<Notifications listNotifications={notifications} />);
    const notificationItems = queryAllByTestId('notification-item');
    expect(notificationItems).toHaveLength(notifications.length);
  });
});
