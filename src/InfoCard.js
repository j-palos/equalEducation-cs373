import React from 'react';
import Link from "react-router-dom/es/Link";
import json_file from "./json/districts.json";
import {Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardTitle, Col, Row} from 'reactstrap';
import './App.css';
import './InfoCard.css';

class InfoCard extends React.Component {
    constructor() {
        super();
        this.state = {
            districtList: []
        };
    }

    componentWillMount() {
        let districts = json_file.districts.district;
        this.setState({
            districtList: districts
        });
    }

    render() {
        const districtList = this.state.districtList;
        let districtListBlock = '';

        if (districtList.length > 0) {
            districtListBlock = districtList.map(obj => {
                return (
                    <Col md="4" className="d-flex align-items-stretch" key={obj.title}>
                        <Card className="Card-margin">
                            <CardBody>
                                <CardTitle className="text-center title-size">{obj.title}</CardTitle>
                                <Link to={`/${obj.school_link}`}>
                                    <CardImg top width="100%" src={obj.img} className="Logo-img" alt="Card image cap"/>
                                </Link>
                            </CardBody>

                            <CardBody>
                                <CardSubtitle className="Logo-subtitle">Location: {obj.location}</CardSubtitle>
                                <CardSubtitle className="Logo-subtitle">Poverty: {obj.poverty}</CardSubtitle>
                                <CardSubtitle className="Logo-subtitle">Grade Range: {obj.grade}</CardSubtitle>
                                <Link to={obj.charity_link}><CardSubtitle
                                    className="Logo-subtitle">Charities</CardSubtitle></Link>
                                <Link to={obj.opportunity_link}><CardSubtitle
                                    className="Logo-subtitle">Volunteer</CardSubtitle></Link>
                                <Row className="Buttons">
                                    <Col className="text-center">
                                        <Link to={obj.school_link}>
                                            <Button color="primary">View More</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                );
            })
        }

        return (
            <CardGroup>
                {districtListBlock}
            </CardGroup>

        );
    }
}

export default InfoCard;
