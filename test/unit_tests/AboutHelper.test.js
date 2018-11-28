import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Table } from 'reactstrap';

Enzyme.configure({ adapter: new Adapter() });

import AboutTable from '../../src/components/AboutTable';

describe('AboutHelper', () => {
  it('returns without exploding', () => {
    expect(
      shallow(
        <Table />
      ).length
    ).toEqual(1);
  });

  it('returns one div', () => {
    expect(
      shallow(
        <div />
      ).length
    ).toEqual(1);
  });

  it('returns one p', () => {
    expect(
      shallow(
        <p />
      ).length
    ).toEqual(1);
  });

  it('returns one span', () => {
    expect(
      shallow(
        <span />
      ).length
    ).toEqual(1);
  });
});
