import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';

const Notifications = ({ listNotifications }) => {
  return (
    <div className="Notifications">
      {listNotifications.length === 0 ? (
        <NotificationItem
          id={0}
          type="default"
          value="No new notification for now"
        />
      ) : (
        listNotifications.map(notification => (
          <NotificationItem
            key={notification.id}
            id={notification.id}
            html={notification.html}
            type={notification.type}
            value={notification.value}
          />
        ))
      )}
    </div>
  );
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  listNotifications: []
};

export default Notifications;
