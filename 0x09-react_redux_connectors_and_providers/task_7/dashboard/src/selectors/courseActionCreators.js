import { createSelector } from 'reselect';
import { List } from 'immutable';

const courseEntitiesSelector = (state) => state.courses.entities;

export const getAllCourses = createSelector(
  [courseEntitiesSelector],
  (courses) => courses.valueSeq().toList()
);
