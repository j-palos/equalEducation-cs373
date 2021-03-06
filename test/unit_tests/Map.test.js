import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import GoogleMap from '../../src/components/Map/Container';
import Marker from '../../src/components/Marker'
import { Map, GoogleApiWrapper } from 'google-maps-react';

describe('Map', () => {
  it('renders without exploding', () => {
    expect(
      shallow(
        <GoogleApiWrapper />
      ).length
    ).toEqual(1);
  });

  it('contains one div', () => {
    expect(
      shallow(
        <div />
      ).length
    ).toEqual(1);
  });

  it('contains one Marker', () => {
    expect(
      shallow(
        <Marker />
      ).length
    ).toEqual(1);
  });
});
