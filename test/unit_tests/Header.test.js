import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Header from '../../src/components/Header';

describe('Header', () => {
  it('renders without exploding', () => {
    expect(
      shallow(
        <Header />
      ).length
    ).toEqual(1);
  });

  const wrapper = shallow(<Header />)
  it('has one header', () => {
    expect(
      wrapper.find('header').length
    ).toBe(1);
  });
});
