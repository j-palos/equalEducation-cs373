import React from 'react';
import {Button, CardBody, CardImg, Col, Row} from 'reactstrap';
import {EntityInfo} from "../EntityComponents/EntityInfo";
import {Link} from 'react-router-dom';
import './InfoCard.css';
import Paper from "@material-ui/core/Paper/Paper";


class Gridcard extends React.PureComponent {

    render() {
        return (
            <Col md="4" className="d-flex align-items-stretch Card-margin">
                <Paper style={{width: '100%', height: '100%'}}>
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

                </Paper>
            </Col>
        );
    }
}


export default Gridcard;
