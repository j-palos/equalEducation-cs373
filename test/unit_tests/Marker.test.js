import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Marker from '../../src/components/Marker';

describe('Marker', () => {
  it('renders without exploding', () => {
    expect(
      shallow(
        <Marker />
      ).length
    ).toEqual(1);
  });

  it('renders one div', () => {
    expect(
      shallow(
        <div />
      ).length
    ).toEqual(1);
  });

  it('renders one p tag', () => {
    expect(
      shallow(
        <p />
      ).length
    ).toEqual(1);
  });

  it('renders one span tag', () => {
    expect(
      shallow(
        <span />
      ).length
    ).toEqual(1);
  });
});
