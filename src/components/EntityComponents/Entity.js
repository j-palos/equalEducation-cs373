import React from 'react';
import {Card, CardBody, CardImg, Col, Container, Row} from 'reactstrap';
import {EntityName} from './EntityName';
import {EntityInfo} from "./EntityInfo";
import {EntityMap} from "./EntityMap";
import {EntityYoutube} from "./EntityYoutube";
import './Entity.css'

export const Entity = (props) => {
    const info = props.info;
    //debugger;
    return (
        <Container className={'mt-5'}>
            <EntityName title={info.Name}/>
            <Row>
                <Container>
                {props.type === 'community' &&
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
                }
                {props.type === 'community' &&
                <Row className={'mt-4 p-3'}>
                  <Card style={{width: '100%'}} className={'mx-auto'}>
                    <CardBody>
                        <EntityInfo info={info.Info}/>
                    </CardBody>
                  </Card>
                </Row>
                }
                {props.type === "charity" &&
                   <Row className={'mt-4 p-3'}>
                   <Col sm={'2'}>
                    </Col>
                    <Col>
                    <EntityYoutube title={info.Name} />
                    </Col>
                    <Col sm={'2'}>
                    </Col>
                   </Row>
                }
                {(props.type === "school" || props.type === "charity") &&
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
                }
                
                </Container>
            </Row>
        </Container>
    );
};
