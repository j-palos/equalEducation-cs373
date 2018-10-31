import React from 'react';
import {EntityName} from './EntityName';
import {Card, CardBody, CardGroup, CardImg, Container, Row} from 'reactstrap';
import {EntityInfo} from "./EntityInfo";

export const Entity = (props) => {
    const info = props.info;
    debugger;
    return (
        <Container className={'mt-5'}>
            <EntityName title={info.Name}/>
            <Row>
                <Container>
                    <CardGroup className={'mx-auto'}>
                        <Card>
                            <CardImg top width="100%" src={info.Image} className={'img-fluid rounded'}/>
                        </Card>
                        <Card style={{width: '50%'}} className={'mx-auto'}>
                            <CardBody>
                                <EntityInfo info={info.Info}/>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Container>
            </Row>
        </Container>
    );
};

