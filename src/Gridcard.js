import React from 'react';
import {Button, Card, CardBody, CardImg, Col, Row} from 'reactstrap';
import {EntityInfo} from "./entityComponents/EntityInfo";
import {Link} from 'react-router-dom';


class Gridcard extends React.Component {

    render() {
        debugger;
        return(
            <Card>
                <CardImg top width="100%" src={this.props.src}/>
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
        );
    }
}


export default Gridcard;
