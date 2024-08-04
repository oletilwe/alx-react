import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications, markAsRead } from './notificationActionCreators';
import { getUnreadNotifications } from './selectors';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  handleMarkAsRead = (id) => {
    this.props.markAsRead(id);
  };

  render() {
    const { unreadNotifications } = this.props;

    return (
      <div>
        {unreadNotifications && unreadNotifications.size > 0 ? (
          <ul>
            {unreadNotifications.map(notification => (
              <li key={notification.id}>
                {notification.message}
                <button onClick={() => this.handleMarkAsRead(notification.id)}>Mark as read</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No unread notifications</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  unreadNotifications: getUnreadNotifications(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  markAsRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
