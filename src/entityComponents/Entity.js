import React from 'react';
import {EntityName} from './EntityName';
import {Card, CardBody, CardDeck, CardImg, Container, Row} from 'reactstrap';
import {EntityInfo} from "./EntityInfo";
import {RelevantOrgs} from "./RelevantOrgs";

export const Entity = (props) => {
    const info = props.info;
    return (
        <Container className={'mt-5'}>
            <EntityName title={info.title}/>
            <Row>
                <Container>
                    <CardDeck>
                        <Card>
                            <CardImg top width="100%" src={info.imageURL} className={'img-fluid rounded'}/>
                            <RelevantOrgs orgs={info.orgs}/>
                        </Card>
                        <Card>
                            <CardBody>
                                <EntityInfo info={info.info}/>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Container>
            </Row>
        </Container>
    );
};

