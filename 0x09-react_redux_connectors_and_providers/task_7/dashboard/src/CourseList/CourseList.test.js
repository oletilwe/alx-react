import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CourseList from './CourseList';
import * as actions from './courseActionCreators';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const courses = [
  { id: '1', name: 'Course 1', credit: 3, isSelected: false },
  { id: '2', name: 'Course 2', credit: 2, isSelected: true }
];

describe('CourseList', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      courses: { entities: fromJS(courses) }
    });
    jest.spyOn(actions, 'fetchCourses').mockImplementation(() => ({ type: 'FETCH_COURSES' }));
    jest.spyOn(actions, 'selectCourse').mockImplementation((id) => ({ type: 'SELECT_COURSE', payload: id }));
    jest.spyOn(actions, 'unSelectCourse').mockImplementation((id) => ({ type: 'UNSELECT_COURSE', payload: id }));
  });

  it('dispatches fetchCourses when component is mounted', () => {
    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );
    expect(actions.fetchCourses).toHaveBeenCalled();
  });

  it('dispatches selectCourse and unSelectCourse correctly when onChangeRow is called', () => {
    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    const checkboxes = screen.getAllByRole('checkbox');

    // Simulate checking the first checkbox
    fireEvent.click(checkboxes[0]);
    expect(actions.selectCourse).toHaveBeenCalledWith('1');

    // Simulate unchecking the second checkbox
    fireEvent.click(checkboxes[1]);
    expect(actions.unSelectCourse).toHaveBeenCalledWith('2');
  });
});
