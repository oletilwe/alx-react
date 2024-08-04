import { fromJS } from 'immutable';
import { getAllCourses } from './courseSelector';

describe('Course Selectors', () => {
  it('should return all courses as a List', () => {
    const state = {
      courses: {
        entities: fromJS({
          1: { id: 1, title: 'Course 1' },
          2: { id: 2, title: 'Course 2' },
          3: { id: 3, title: 'Course 3' }
        })
      }
    };

    const expected = fromJS([
      { id: 1, title: 'Course 1' },
      { id: 2, title: 'Course 2' },
      { id: 3, title: 'Course 3' }
    ]);

    const result = getAllCourses(state);
    expect(result).toEqual(expected);
  });

  it('should return an empty List if there are no courses', () => {
    const state = {
      courses: {
        entities: fromJS({})
      }
    };

    const expected = fromJS([]);

    const result = getAllCourses(state);
    expect(result).toEqual(expected);
  });
});
