import React, {Component} from 'react';
import {EntityName} from './EntityName';
import {Card, CardBody, CardDeck, CardImg, Container, Row} from 'reactstrap';
import {EntityInfo} from "./EntityInfo";
import {RelevantOrgs} from "./RelevantOrgs";

export default class SchoolEntity extends Component {

    //In this data, the orgs will be identified by the id in the db, and we can generate that part from there. need the api working
    constructor(props) {
        super(props);
        this.state = {
            title: "Oakland Unified School District",
            imageURL: 'http://www.equaleducation.info/images/static/oakland.jpg',
            info: {
                "Location": "Oakland, California",
                "Estimated # of Families w/ Children Ages 5-17 Below Poverty Level": "12,817",
                "Description": "Oakland Unified School District is a public education school district that operates about 86 elementary schools (K-5), middle schools (6-8), and high schools (9-12) and 32 district-authorized charter schools in Oakland, California, United States serving 49,000 students."
            },
            orgs: {"Oakland Public Education Fund": 0},
            locationURL: '',
        }
    };

    render() {
        return (
            <Container className={'mt-5'}>
                <EntityName title={this.state.title}/>
                <Row>
                    <Container>
                        <CardDeck>
                            <Card>
                                <CardImg top width="100%" src={this.state.imageURL} className={'img-fluid rounded'}/>
                                <RelevantOrgs orgs={this.state.orgs}/>
                            </Card>
                            <Card>
                                <CardBody>
                                    <EntityInfo info={this.state.info}/>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </Container>
                </Row>
            </Container>
        );
    }
}

