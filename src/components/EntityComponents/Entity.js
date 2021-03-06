import React from 'react';
import {Card, CardBody, CardImg, Col, Container, Row} from 'reactstrap';
import {EntityName} from './EntityName';
import {EntityInfo} from "./EntityInfo";
import {EntityMap} from "./EntityMap";
import {EntityYoutube} from "./EntityYoutube";
import {EntityBarChart} from "./EntityBarChart";
import {EntityPieChart} from "./EntityPieChart";
import './Entity.css'
import RelatedLinks from "./RelatedLinks";

class Entity extends React.Component {

    /*
        This is  avery VERY important method here do NOT change or delete
     */
    shouldComponentUpdate(nextProps) {
        return this.props.info !== nextProps.info;
    }

    render() {
        const info = this.props.info;
        const props = this.props;
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
                                <EntityMap info={info.Location}/>
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
                        {props.type === "charity" &&
                        <Row className={'mt-4 p-3'}>
                            <Col>
                                <EntityYoutube title={info.Name}/>
                            </Col>
                        </Row>
                        }
                        {props.type === "school" &&
                        <Row className={'mt-4 p-3'}>
                            <Col>
                                <EntityBarChart info={info.Info}/>
                            </Col>
                            <Col className={'left-padding'}>
                                <EntityPieChart info={info.Info}/>
                            </Col>
                        </Row>
                        }
                        {props.type === 'school' &&
                        <Row>
                            <Col>
                                <RelatedLinks id={info.Id} to={'community'} from={'school'}/>
                            </Col>
                            <Col>
                                <RelatedLinks id={info.Id} to={'charity'} from={'school'}/>
                            </Col>
                        </Row>}
                        {props.type === 'community' &&
                        <Row>
                            <Col>
                                <RelatedLinks id={info.Id} to={'charity'} from={'community'}/>
                            </Col>
                            <Col>
                                <RelatedLinks id={info.Id} to={'school'} from={'community'}/>
                            </Col>
                        </Row>}
                        {props.type === 'charity' &&
                        <Row
                        ><Col><
                            RelatedLinks id={info.Id} to={'community'} from={'charity'}/>
                        </Col>
                            <Col>
                                <RelatedLinks id={info.Id} to={'school'} from={'charity'}/>
                            </Col>
                        </Row>}
                    </Container>
                </Row>
            </Container>
        );
    }
}

export default Entity;
