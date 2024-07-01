import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem type="default" value="test" />);
  });

  it('renders correctly with type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.text()).toBe('test');
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
  });

  it('renders correctly with html prop', () => {
    const htmlContent = '<u>test</u>';
    const wrapper = shallow(<NotificationItem type="urgent" html={{ __html: htmlContent }} />);
    expect(wrapper.find('li').prop('data-notification-type')).toBe('urgent');
    expect(wrapper.html()).toContain(htmlContent);
  });
});
