import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";
import oakland from "./images/static/oakland.jpg";
import json_file from "./json/districts.json";
import { Button, Card, CardBody, CardImg, CardSubtitle, 
        CardTitle, CardText, CardDeck, CardGroup, Row, Col } from 'reactstrap';
import ReadMoreReact from 'read-more-react';
import './App.css';
import './InfoCard.css';

const renderImg = (page) => {
  console.log(typeof page);
  return require(page);
}

class InfoCard extends React.Component {
  constructor() {
      super();
      this.state = {
          districtList:[]
      };
  }

  componentWillMount() {
    let districts = json_file.districts.district
    this.setState({
      districtList: districts
    });
  }

  render() {
    const districtList = this.state.districtList;
    let districtListBlock = '';

    if(districtList.length > 0) {
      districtListBlock = districtList.map( obj => {
        console.log(obj.img);
        return(
          <Col md="4" className="text-center d-flex align-items-stretch">
            <Card>
              <Link to={obj.school_link}>
                <CardImg top width="100%" src={obj.img} className="Logo-img" alt="Card image cap" />
              </Link>
              <CardBody>
                <Link to={obj.school_link}><CardTitle>{obj.title}</CardTitle></Link>
                <CardSubtitle className="Logo-subtitle">Location: {obj.location}</CardSubtitle>
                <CardSubtitle className="Logo-subtitle">Poverty: {obj.poverty}</CardSubtitle>
                <ReadMoreReact text={obj.description} ideal="150"/>
                <Row className="Buttons">
                  <Col>
                    <Link to={obj.charity_link}>
                      <Button outline color="primary">Charities</Button>
                    </Link>
                  </Col>
                  <Col>
                    <Link to={obj.opportunity_link}>
                      <Button outline color="primary">Volunteer</Button>
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
      <Row >
        {districtListBlock}
      </Row>

    );
  }
}

export default InfoCard;
