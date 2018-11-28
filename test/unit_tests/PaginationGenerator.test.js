import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import PagingGenerator from '../../src/components/PaginationComponents/PagingGenerator';
import {PaginationItem, PaginationLink} from 'reactstrap';


describe('PagingGenerator', () => {
  it('renders without exploding', () => {
    expect(
      shallow(
        <PaginationItem />
      ).length
    ).toEqual(1);
  });

  it('contains one Pagination link', () => {
    expect(
      shallow(
        <PaginationLink />
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

  it('contains one p', () => {
    expect(
      shallow(
        <p />
      ).length
    ).toEqual(1);
  });

  it('contains one span', () => {
    expect(
      shallow(
        <span />
      ).length
    ).toEqual(1);
  });
});
