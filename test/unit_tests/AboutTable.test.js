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
});
