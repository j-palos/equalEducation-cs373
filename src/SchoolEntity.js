import React, {Component} from 'react';
import {EntityName} from './EntityName';
import {Col, Container, Row} from 'reactstrap';

export default class SchoolEntity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Oakland',

        }
    }

    render() {
        return (
            <Container className={'mt-5'}>
                <Row>
                    <Col>
                        <EntityName title={this.state.title}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

