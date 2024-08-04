import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './courseActionCreators';
import { SET_COURSES, SET_LOADING_STATE } from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('courseActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates SET_COURSES when fetching courses has been done', () => {
    const courses = [{ id: 1, title: 'Course 1' }, { id: 2, title: 'Course 2' }];
    fetchMock.getOnce('/courses.json', {
      body: courses,
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: SET_LOADING_STATE, payload: true },
      { type: SET_COURSES, payload: courses },
      { type: SET_LOADING_STATE, payload: false }
    ];
    const store = mockStore({ courses: [] });

    return store.dispatch(actions.fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
