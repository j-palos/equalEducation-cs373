import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import SortBar from '../../src/components/SortBar/SortBar';

describe('SortBar', () => {
  it('renders without exploding', () => {
    expect(
      shallow(
        <SortBar />
      ).length
    ).toEqual(1);
  });
});
