import React from 'react';
import Link from "react-router-dom/es/Link";
import district_file from "./json/districts.json";
import community_file from "./json/communities.json";
import charity_file from "./json/charities.json";
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
        let jsonFile;
        let attrs;
        //todo change this to api calls
        switch (this.props.type) {
            case "school":
                let districts = district_file.districts.district;
                jsonFile = districts;
                attrs = {"attr1": "Location", "attr2": "Poverty", "attr3": "Grade Range"};
                break;
            case "community":
                let communities = community_file.communities.community;
                jsonFile = communities;
                attrs = {"attr1": "ATTR1", "attr2": "ATTR2", "attr3": "ATTR3"};
                break;
            case "charity":
                let charities = charity_file.charities.charity;
                jsonFile = charities;
                attrs = {"attr1": "Location", "attr2": "Deductibility", "attr3": "Rating"};
                break;
            default:
                break;
        }

        // let districts = jsonFile.districts.district;
        this.setState({
            attrsList: attrs,
            jsonList: jsonFile
        });
    }

    render() {
        const jsonList = this.state.jsonList;
        const attrsList = this.state.attrsList;
        let listBlock = '';
        if (jsonList.length > 0) {
            listBlock = jsonList.map(obj => {
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
                                <CardSubtitle
                                    className="Logo-subtitle">{attrsList["attr1"]}: {obj.attrs[attrsList["attr1"].toLowerCase().split(' ').join('_')]}</CardSubtitle>
                                <CardSubtitle
                                    className="Logo-subtitle">{attrsList["attr2"]}: {obj.attrs[attrsList["attr2"].toLowerCase().split(' ').join('_')]}</CardSubtitle>
                                <CardSubtitle
                                    className="Logo-subtitle">{attrsList["attr3"]}: {obj.attrs[attrsList["attr3"].toLowerCase().split(' ').join('_')]}</CardSubtitle>
                                <Link to={obj.attrs["charity_link"]}><CardSubtitle
                                    className="Logo-subtitle">Charities</CardSubtitle></Link>
                                <Link to={obj.attrs["opportunity_link"]}><CardSubtitle
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
                {listBlock}
            </CardGroup>

        );
    }
}

export default InfoCard;
