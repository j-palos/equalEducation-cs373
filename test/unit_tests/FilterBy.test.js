import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import FilterBy from '../../src/components/SortBar/FilterBy';

describe('FilterBy', () => {
  it('renders without exploding', () => {
    expect(
      shallow(
        <FilterBy />
      ).length
    ).toEqual(1);
  });
});
