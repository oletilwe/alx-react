import React from 'react';

const CourseListRow = ({ textFirstCell, textSecondCell, isHeader }) => {
  if (isHeader) {
    return (
      <tr>
        <th>{textFirstCell}</th>
        {textSecondCell && <th>{textSecondCell}</th>}
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

export default CourseListRow;
