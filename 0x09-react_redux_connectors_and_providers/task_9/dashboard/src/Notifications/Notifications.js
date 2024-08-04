import React from 'react';

const Notifications = ({ notifications, filter, setNotificationFilter }) => {
  const handleFilterChange = (filterType) => {
    setNotificationFilter(filterType);
  };

  return (
    <div>
      <h1>Here is the list of notifications</h1>
      <button onClick={() => handleFilterChange('urgent')}>
        ‼️
      </button>
      <button onClick={() => handleFilterChange('default')}>
        💠
      </button>
      <ul>
        {notifications.map(notification => (
          <li key={notification.get('id')}>
            {notification.get('message')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
