import React from 'react';
import Notifications from './Notifications/Notifications';

const App = () => {
  const listNotifications = [
    {
      id: 1,
      html: { __html: '<strong>Warning:</strong> This is an important notification' },
      type: 'warning',
      value: 'New course available'
    },
    {
      id: 2,
      html: null,
      type: 'default',
      value: 'New resume available'
    },
    {
      id: 3,
      html: { __html: '<em>Info:</em> Application deadline approaching' },
      type: 'info',
      value: 'New notification'
    }
  ];

  return (
    <div className="App">
      <Notifications listNotifications={listNotifications} />
    </div>
  );
};

export default App;
