import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import MyNavbar from '../../src/components/MyNavbar/MyNavbar';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';

describe('MyNavbar', () => {
  it('renders without exploding', () => {
    expect(
      shallow(
        <MyNavbar />
      ).length
    ).toEqual(1);
  });

  const wrapper = shallow(<MyNavbar />)
  it('has one Collapse', () => {
    expect(
      wrapper.find('Collapse').length
    ).toBe(1);
  });

  it('links to root with a tag in NavbarBrand', () => {
    expect(
      shallow(
        <NavbarBrand/>
      ).length
    ).toEqual(1);
  });

  it('links to root with a tag in NavItem', () => {
    expect(
      shallow(
        <NavItem/>
      ).length
    ).toEqual(5);
  });

  it('links to root with first link', () => {
    expect(
      wrapper.find('NavLink')
      .at('0')
      .prop("to")
    ).toEqual('/');
  });

  it('links to root with second link', () => {
    expect(
      wrapper.find('NavLink')
      .at('1')
      .prop('to')
    ).toEqual('/schools');
  });

  it('links to charity with third link', () => {
    expect(
      wrapper.find('NavLink')
      .at('2')
      .prop('to')
    ).toEqual('/communities');
  });

  it('links to communities with fourth link', () => {
    expect(
      wrapper.find('NavLink')
      .at('3')
      .prop('to')
    ).toEqual('/charities');
  });

  it('links to about with sixth link', () => {
    expect(
      wrapper.find('NavLink')
      .at('4')
      .prop('to')
    ).toEqual('/about');
  });
});
