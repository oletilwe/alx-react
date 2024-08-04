import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUnreadNotificationsByType } from './selectors/notificationSelector';
import { setNotificationFilter } from './notificationActionCreators';

class Notifications extends Component {
  handleFilterChange = (filterType) => {
    this.props.setNotificationFilter(filterType);
  };

  render() {
    const { notifications, filter } = this.props;

    return (
      <div>
        <h1>Here is the list of notifications</h1>
        <button onClick={() => this.handleFilterChange('urgent')}>
          ‼️
        </button>
        <button onClick={() => this.handleFilterChange('default')}>
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
  }
}

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
  filter: state.notifications.filter,
});

const mapDispatchToProps = {
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
