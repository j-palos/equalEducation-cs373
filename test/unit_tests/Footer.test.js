import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Footer from '../../src/components/Footer';

describe('Footer', () => {
  it('renders without exploding', () => {
    expect(
      shallow(
        <Footer />
      ).length
    ).toEqual(1);
  });

  const wrapper = shallow(<Footer />)
  it('has one div tag', () => {
    expect(
      wrapper.find('div').length
    ).toBe(1);
  });


  it('has two p tags', () => {
    expect(
      wrapper.find('p').length
    ).toBe(2);
  });

  it('has one button tag', () => {
    expect(
      wrapper.find('button').length
    ).toBe(1);
  });
});
