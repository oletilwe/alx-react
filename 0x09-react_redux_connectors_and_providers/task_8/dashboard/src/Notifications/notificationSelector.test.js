import { fromJS } from 'immutable';
import { getUnreadNotificationsByType } from './notificationSelector';

describe('notificationSelector', () => {
  it('should return all unread notifications when filter is default', () => {
    const state = {
      notifications: {
        messages: fromJS({
          1: { id: '1', message: 'Notification 1', isRead: false, isUrgent: false },
          2: { id: '2', message: 'Notification 2', isRead: false, isUrgent: true },
          3: { id: '3', message: 'Notification 3', isRead: true, isUrgent: false },
        }),
        filter: 'default'
      }
    };

    const expected = fromJS([
      { id: '1', message: 'Notification 1', isRead: false, isUrgent: false },
      { id: '2', message: 'Notification 2', isRead: false, isUrgent: true }
    ]);

    const result = getUnreadNotificationsByType(state);
    expect(result).toEqual(expected);
  });

  it('should return only urgent unread notifications when filter is urgent', () => {
    const state = {
      notifications: {
        messages: fromJS({
          1: { id: '1', message: 'Notification 1', isRead: false, isUrgent: false },
          2: { id: '2', message: 'Notification 2', isRead: false, isUrgent: true },
          3: { id: '3', message: 'Notification 3', isRead: true, isUrgent: true },
        }),
        filter: 'urgent'
      }
    };

    const expected = fromJS([
      { id: '2', message: 'Notification 2', isRead: false, isUrgent: true }
    ]);

    const result = getUnreadNotificationsByType(state);
    expect(result).toEqual(expected);
  });

  it('should return an empty List if there are no unread notifications', () => {
    const state = {
      notifications: {
        messages: fromJS({
          1: { id: '1', message: 'Notification 1', isRead: true, isUrgent: false },
          2: { id: '2', message: 'Notification 2', isRead: true, isUrgent: true },
        }),
        filter: 'default'
      }
    };

    const expected = fromJS([]);

    const result = getUnreadNotificationsByType(state);
    expect(result).toEqual(expected);
  });

  it('should return unread urgent notifications when filter is urgent', () => {
    const state = {
      notifications: {
        messages: fromJS({
          1: { id: '1', message: 'Notification 1', isRead: false, isUrgent: true },
          2: { id: '2', message: 'Notification 2', isRead: false, isUrgent: true },
          3: { id: '3', message: 'Notification 3', isRead: false, isUrgent: false },
        }),
        filter: 'urgent'
      }
    };

    const expected = fromJS([
      { id: '1', message: 'Notification 1', isRead: false, isUrgent: true },
      { id: '2', message: 'Notification 2', isRead: false, isUrgent: true }
    ]);

    const result = getUnreadNotificationsByType(state);
    expect(result).toEqual(expected);
  });
});
