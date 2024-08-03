import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer'; // Import the stateless Footer component

describe('Footer Component', () => {
  const defaultProps = {
    user: { name: 'John Doe' },
  };

  it('should render correctly with default props', () => {
    const wrapper = shallow(<Footer {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
