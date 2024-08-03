// Import necessary modules for testing
import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('mapStateToProps', () => {
  it('should return the right object when passing the state', () => {
    const state = fromJS({
      uiReducer: {
        isLoggedIn: true
      }
    });

    const expectedProps = {
      isLoggedIn: true
    };

    expect(mapStateToProps(state.toJS())).toEqual(expectedProps);
  });
});

