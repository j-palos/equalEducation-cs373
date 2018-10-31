import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import AboutPage from '../../src/components/AboutPage';

describe('AboutPage', () => {
  it('renders without exploding', () => {
    expect(
      shallow(
        <AboutPage />
      ).length
    ).toEqual(1);
  });

  const wrapper = shallow(<AboutPage />)
  it('has five Rows', () => {
    expect(
      wrapper.find('Row').length
    ).toBe(5);
  });

  it('shows six members', () => {
    expect(
      wrapper.find('PersonCard').length
    ).toBe(6);
  });

  it('contains one AboutHelper component', () => {
    expect(
      wrapper.find('AboutHelper').length
    ).toBe(1);
  });

  it('contains fifteen images of tools', () => {
    expect(
      wrapper.find('img').length
    ).toBe(15);
  });
});
