import React from 'react';
import {Button, Card, CardBody, CardImg, Col, Row} from 'reactstrap';
import {EntityInfo} from "../EntityComponents/EntityInfo";
import {Link} from 'react-router-dom';
import './InfoCard.css';


class Gridcard extends React.PureComponent {

    render() {
        return (
            <Col md="4" className="d-flex align-items-stretch Card-margin">
                <Card>
                    <div className="Logo-img-container">
                        <CardImg className="Logo-img" top src={this.props.src}/>
                    </div>
                    <CardBody>
                        <EntityInfo info={this.props.info}/>
                        <Row className="Buttons">
                            <Col className="text-center">
                                <Link to={this.props.link}>
                                    <Button color="primary">View More</Button>
                                </Link>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}


export default Gridcard;
