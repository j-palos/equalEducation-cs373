import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import MyNavbar from '../../src/components/MyNavbar';

describe('MyNavbar', () => {
  it('renders without exploding', () => {
    expect(
      shallow(
        <MyNavbar />
      ).length
    ).toEqual(1);
  });

  const wrapper = shallow(<MyNavbar />)
  it('links to root with first link', () => {
    expect(
      wrapper.find('Link')
      .at('0')
      .prop('to')
    ).toEqual('/');
  });

  it('links to root with second link', () => {
    expect(
      wrapper.find('Link')
      .at('1')
      .prop('to')
    ).toEqual('/');
  });

  it('links to root with third link', () => {
    expect(
      wrapper.find('Link')
      .at('2')
      .prop('to')
    ).toEqual('/school');
  });

  it('links to volunteer with fourth link', () => {
    expect(
      wrapper.find('Link')
      .at('3')
      .prop('to')
    ).toEqual('/volunteer');
  });

  it('links to charity with fifth link', () => {
    expect(
      wrapper.find('Link')
      .at('4')
      .prop('to')
    ).toEqual('/charity');
  });

  it('links to about with sixth link', () => {
    expect(
      wrapper.find('Link')
      .at('5')
      .prop('to')
    ).toEqual('/about');
  });
});
