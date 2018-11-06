import React from 'react';
import {EntityName} from './EntityName';
import {Card, CardBody, CardImg, Col, Container, Row} from 'reactstrap';
import {EntityInfo} from "./EntityInfo";

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
                        <Col sm={'8'}>
                            <Card style={{width: '100%'}} className={'mx-auto'}>
                            <CardBody>
                                <EntityInfo info={info.Info}/>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    );
};

