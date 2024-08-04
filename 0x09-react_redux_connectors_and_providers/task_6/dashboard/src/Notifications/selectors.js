import { createSelector } from 'reselect';

const notificationsSelector = (state) => state.notifications.messages;

export const getUnreadNotifications = createSelector(
  [notificationsSelector],
  (notifications) => notifications.valueSeq().filter(notification => !notification.isRead)
);
