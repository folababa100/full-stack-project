import React from 'react';
import { shallow } from 'enzyme';
import MainBody from '../components/MainBody';

test('should render component correctly', () => {
  const wrapper = shallow(<MainBody/>);
  expect(wrapper).toMatchSnapshot()
})
