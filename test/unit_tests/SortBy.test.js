import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import SortBy from '../../src/components/SortBar/SortBy';

describe('SortBy', () => {
  it('renders without exploding', () => {
    expect(
      shallow(
        <SortBy />
      ).length
    ).toEqual(1);
  });
});
