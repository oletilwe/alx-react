import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses, selectCourse, unSelectCourse } from './courseActionCreators';
import { getListCourses } from './selectors/courseSelector';
import CourseListRow from './CourseListRow';

class CourseList extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow = (id, checked) => {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  };

  render() {
    const { courses } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Credit</th>
            <th>Is Selected</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <CourseListRow
              key={course.id}
              id={course.id}
              name={course.name}
              credit={course.credit}
              isChecked={course.isSelected}
              onChangeRow={this.onChangeRow}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: getListCourses(state),
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
