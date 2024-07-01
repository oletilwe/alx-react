import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ textFirstCell, textSecondCell, isHeader }) => {
  if (isHeader) {
    return (
      <tr>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  isHeader: PropTypes.bool.isRequired
};

export default CourseListRow;
