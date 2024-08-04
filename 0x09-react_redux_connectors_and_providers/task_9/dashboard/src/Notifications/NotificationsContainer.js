import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import { fetchNotifications, setNotificationFilter } from './notificationActionCreators';
import { getUnreadNotificationsByType } from './selectors/notificationSelector';

const NotificationsContainer = ({ notifications, filter, fetchNotifications, setNotificationFilter }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <Notifications
      notifications={notifications}
      filter={filter}
      setNotificationFilter={setNotificationFilter}
    />
  );
};

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
  filter: state.notifications.filter,
});

const mapDispatchToProps = {
  fetchNotifications,
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
