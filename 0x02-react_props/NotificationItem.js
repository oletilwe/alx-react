import React from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';

const Notifications = () => {
  return (
    <div className="notifications">
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html="<strong>Urgent requirement</strong> - complete by EOD" />
      </ul>
    </div>
  );
};

export default Notifications;
