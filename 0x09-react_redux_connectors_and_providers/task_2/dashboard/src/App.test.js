import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('mapStateToProps', () => {
  it('should return the right object when passing the state', () => {
    const state = fromJS({
      uiReducer: {
        isLoggedIn: true,
        isNotificationDrawerVisible: true,
        loading: false,
        user: { name: 'John Doe' },
        error: null,
      }
    });

    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: true,
      loading: false,
      user: { name: 'John Doe' },
      error: null,
    };

    expect(mapStateToProps(state.toJS())).toEqual(expectedProps);
  });

  it('should return the right object with different state values', () => {
    const state = fromJS({
      uiReducer: {
        isLoggedIn: false,
        isNotificationDrawerVisible: false,
        loading: true,
        user: null,
        error: 'Invalid credentials',
      }
    });

    const expectedProps = {
      isLoggedIn: false,
      displayDrawer: false,
      loading: true,
      user: null,
      error: 'Invalid credentials',
    };

    expect(mapStateToProps(state.toJS())).toEqual(expectedProps);
  });
});
