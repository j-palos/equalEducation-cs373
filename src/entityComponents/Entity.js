import React from 'react';
import {EntityName} from './EntityName';
import {Card, CardBody, CardDeck, CardImg, Container, Row} from 'reactstrap';
import {EntityInfo} from "./EntityInfo";

export const Entity = (props) => {
    const info = props.info;
    debugger;
    return (
        <Container className={'mt-5'}>
            <EntityName title={info.Name}/>
            <Row>
                <Container>
                    <CardDeck>
                        <Card>
                            <CardImg top width="100%" src={info.Image} className={'img-fluid rounded'}/>
                            <CardBody>
                                <EntityInfo info={info.Info}/>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Container>
            </Row>
            <Row></Row>
        </Container>
    );
};

