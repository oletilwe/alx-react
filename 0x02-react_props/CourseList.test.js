import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';
import { CourseShape } from './CourseShape';

describe('CourseList component', () => {
  test('renders correctly with empty listCourses or no listCourses prop', () => {
    const { queryByText } = render(<CourseList />);
    expect(queryByText('No course available yet')).toBeInTheDocument();
  });

  test('renders courses correctly with listCourses', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 }
    ];
    const { queryByText } = render(<CourseList listCourses={courses} />);
    expect(queryByText('ES6')).toBeInTheDocument();
    expect(queryByText('Webpack')).toBeInTheDocument();
  });

  test('displays "No course available yet" when listCourses is empty', () => {
    const { queryByText } = render(<CourseList />);
    expect(queryByText('No course available yet')).toBeInTheDocument();
  });

  test('displays the correct number of course rows with listCourses', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const { queryAllByTestId } = render(<CourseList listCourses={courses} />);
    const courseRows = queryAllByTestId('course-row');
    expect(courseRows).toHaveLength(courses.length);
  });
});
