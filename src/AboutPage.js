import React, {Component} from 'react';
import './styles/carousel.css';
import './styles/bootstrap-4.1.3-dist/css/bootstrap.min.css';
import {CardDeck, Col, Container, Row} from 'reactstrap';
import PersonCard from "./presentation/PersonCard";
import AboutHelper from "./aboutHelper";

class AboutPage extends Component {


    constructor() {
        super();
        this.state = {
            done_names: false,
            done_issues: false,
            names: [],
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <Container>
                {/*<Header/>*/}
                <main role="main">
                    <Container className="marketing">
                        <hr className="featurette-divider"/>
                        <Row className="featurette">
                            <Col>
                                <h1>About the Site</h1>
                                <p className="lead">A website to help people find charitable opportunities to assist
                                    underprivileged children with their education. The website aggregates a
                                    large
                                    number of low income areas and highlights specific stats about the surrounding
                                    community to raise awareness to these impoverished areas. Users are then able to donate their time
                                    and/or money to organizations associated with these communities through our website.</p>
                            </Col>
                        </Row>
                        <hr className="featurette-divider"/>
                        <Row className="featurette">
                            <Col>
                                <h1>About our Data</h1>
                                <p className="lead">Charity Navigator, Census Govt (RESTful APIs)</p>
                            </Col>
                        </Row>
                        <hr className="featurette-divider"/>
                        <Row className={"featurette"}>
                            <CardDeck>
                                <PersonCard name={'Jesus'}/>
                                <PersonCard name={'Prateek'}/>
                                <PersonCard name={'Intae'}/>
                            </CardDeck>
                        </Row>
                        <hr className={"featurette-divider"}/>
                        <Row className={"featurette"}>
                            <Col></Col>
                            <Col sm={"9"}>
                                <CardDeck>
                                    <PersonCard name={'Andrew'}/>
                                    <PersonCard name={'Kyle'}/>
                                </CardDeck>
                            </Col>
                            <Col></Col>
                        </Row>
                        <hr className={"featurette-divider"}/>
                        <Row className={"featurette"}>
                            <AboutHelper/>
                        </Row>
                    </Container>
                    {/*<Footer/>*/}
                </main>
            </Container>
        );
    }
}

export default AboutPage;
