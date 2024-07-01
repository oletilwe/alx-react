import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

test('renders CourseList component without crash', () => {
  render(<CourseList />);
});
