import { SET_COURSES } from './actionTypes';

// Action types
export const SET_COURSES = 'SET_COURSES';

// Action creators
export const setCourses = (courses) => ({
  type: SET_COURSES,
  payload: courses,
});

export const fetchCourses = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch('/courses.json')
      .then(response => response.json())
      .then(data => {
        dispatch(setCourses(data));
        dispatch(setLoadingState(false));
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        dispatch(setLoadingState(false));
      });
  };
};
