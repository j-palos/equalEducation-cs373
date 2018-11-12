import React from 'react';
import {Card, CardBody, CardImg, Col, Container, Row} from 'reactstrap';
import {EntityName} from './EntityName';
import {EntityInfo} from "./EntityInfo";
import {EntityMap} from "./EntityMap";
import {BarChart} from "../BarChart";

export const Entity = (props) => {
    const info = props.info;
    return (
        <Container className={'mt-5'}>
            <EntityName title={info.Name}/>
            <Row>
                <Container>
                    <Row>
                        <Col sm={'4'}>
                        <Card>
                            <CardImg top width="100%" src={info.Image} className={'img-fluid rounded'}/>
                        </Card>
                        </Col>
                        <Col sm={'8 pr-5'}>
                          <EntityMap info={info.Info}/>
                        </Col>
                    </Row>
                    <Row className={'mt-4 p-3'}>
                      <Card style={{width: '100%'}} className={'mx-auto'}>
                        <CardBody>
                            <EntityInfo info={info.Info}/>
                        </CardBody>
                      </Card>
                    </Row>
                </Container>
            </Row>
        </Container>
    );
};
