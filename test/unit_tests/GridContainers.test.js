import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import GridContainer from '../../src/components/GridContainers/GridContainer';
import {CardColumns, CardDeck, Container, Col} from 'reactstrap';


describe('GridContainer', () => {
  it('renders without exploding', () => {
    expect(
      shallow(
        <Container />
      ).length
    ).toEqual(1);
  });
});
