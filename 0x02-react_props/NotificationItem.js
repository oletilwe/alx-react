import React from 'react';
import PropTypes from 'prop-types';
import './NotificationItem.css';

const NotificationItem = ({ id, html, type, value }) => {
  return (
    <div className={`notification ${type}`}>
      {html ? <div dangerouslySetInnerHTML={html} /> : <p>{value}</p>}
    </div>
  );
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default NotificationItem;
