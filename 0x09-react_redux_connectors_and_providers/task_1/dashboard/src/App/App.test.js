import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('mapStateToProps', () => {
  it('should return the right object when passing the state', () => {
    const state = fromJS({
      uiReducer: {
        isLoggedIn: true,
        isNotificationDrawerVisible: true,
      }
    });

    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: true,
    };

    expect(mapStateToProps(state.toJS())).toEqual(expectedProps);
  });

  it('should return the right object with different state values', () => {
    const state = fromJS({
      uiReducer: {
        isLoggedIn: false,
        isNotificationDrawerVisible: false,
      }
    });

    const expectedProps = {
      isLoggedIn: false,
      displayDrawer: false,
    };

    expect(mapStateToProps(state.toJS())).toEqual(expectedProps);
  });
});
