import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Table } from 'reactstrap';

Enzyme.configure({ adapter: new Adapter() });

import AboutTable from '../../src/components/AboutTable';

describe('AboutTable', () => {
  it('returns one table', () => {
    expect(
      shallow(
        <Table />
      ).length
    ).toEqual(1);
  });

  it('contains one thead', () => {
    expect(
      shallow(
        <thead />
      ).length
    ).toEqual(1);
  });

  it('contains one tr', () => {
    expect(
      shallow(
        <tr />
      ).length
    ).toEqual(1);
  });

  it('contains a th', () => {
    expect(
      shallow(
        <th />
      ).length
    ).toEqual(1);
  });

  it('contains one tbody', () => {
    expect(
      shallow(
        <tbody />
      ).length
    ).toEqual(1);
  });
});
