import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from './notificationActionCreators';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { listNotifications } = this.props;

    return (
      <div>
        {listNotifications && listNotifications.length > 0 ? (
          <ul>
            {listNotifications.map(notification => (
              <li key={notification.id}>{notification.message}</li>
            ))}
          </ul>
        ) : (
          <p>No notifications</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listNotifications: state.notifications.messages,
});

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
