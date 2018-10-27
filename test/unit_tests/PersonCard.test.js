import React from 'react';
import Enzyme from 'enzyme';
import expect from 'expect';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

Enzyme.configure({ adapter: new Adapter() });

import PersonCard from '../../src/components/PersonCard';

describe('PersonCard', () => {
  it('returns one card', () => {
    expect(
      shallow(
        <Card />
      ).length
    ).toEqual(1);
  });
});
