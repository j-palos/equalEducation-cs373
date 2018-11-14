import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import PagingGenerator from '../../src/components/PaginationComponents/PagingGenerator';
import {PaginationItem} from 'reactstrap';


describe('PagingGenerator', () => {
  it('renders without exploding', () => {
    expect(
      shallow(
        <PaginationItem />
      ).length
    ).toEqual(1);
  });
});
