import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header'; // Import the stateless Header component

describe('Header Component', () => {
  const defaultProps = {
    user: { name: 'John Doe' },
    logout: jest.fn(),
  };

  it('should render correctly with default props', () => {
    const wrapper = shallow(<Header {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call logout when logout link is clicked', () => {
    const wrapper = shallow(<Header {...defaultProps} />);
    wrapper.find('a').simulate('click', { preventDefault: () => {} });
    expect(defaultProps.logout).toHaveBeenCalled();
  });
});

