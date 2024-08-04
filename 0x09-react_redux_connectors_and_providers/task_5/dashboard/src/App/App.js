import React, { Component } from 'react';
import Notifications from './Notifications';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Notification App</h1>
        <Notifications />
      </div>
    );
  }
}

export default App;
