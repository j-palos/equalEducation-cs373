import React, {Component} from 'react';
import './styles.css'
import '../../styles/carousel.css';
import '../../styles/bootstrap-4.1.3-dist/css/bootstrap.min.css';
import {CardDeck, Col, Container, Row} from 'reactstrap';
import PersonCard from "./PersonCard";
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
                            <CardDeck className="margin-bottom">
                                <PersonCard className="card-top-padding" name={'Jesus'}/>
                                <PersonCard className="card-top-padding" name={'Prateek'}/>
                                <PersonCard className="card-top-padding" name={'Intae'}/>
                            </CardDeck>
                        </Row>
                        <Row className={"featurette"}>
                            <Col></Col>
                              <CardDeck>
                                  <PersonCard name={'Andrew'}/>
                                  <PersonCard name={'Kyle'}/>
                                  <PersonCard name={'Ailyn'}/>
                              </CardDeck>
                            <Col></Col>
                        </Row>
                        <hr className={"featurette-divider"}/>
                        <Row className={"featurette"}>
                            <AboutHelper/>
                        </Row>
                        <hr className={"featurette-divider"}/>
                        <h1>Tools Used</h1>
                        <Col className="tools">
                          <img className="image_size" style={{width: 180, height: 180}}
                            src={require("../../images/logo/gitlab.png")} alt="gitlab" />
                          <img className="image_size" style={{width: 180, height: 180}}
                            src={require("../../images/logo/docker.png")} alt="docker"/>
                          <img className="image_size" style={{width: 180, height: 180}}
                            src={require("../../images/logo/gcp.png")} alt="gcp"/>
                          <img className="image_size" style={{width: 180, height: 180}}
                            src={require("../../images/logo/gke.svg")} alt="gke"/>
                          <img className="image_size" style={{width: 180, height: 180}}
                            src={require("../../images/logo/namecheap.png")} alt="namecheap"/>
                          <img className="image_size" style={{width: 180, height: 180}}
                            src={require("../../images/logo/react.png")} alt="react"/>
                          <img className="image_size" style={{width: 180, height: 180}}
                            src={require("../../images/logo/postman.png")} alt="postman" />
                          <img className="image_size" style={{width: 180, height: 180}}
                            src={require("../../images/logo/slack.png")} alt="slack" />
                          <img className="image_size" style={{width: 180, height: 180}}
                            src={require("../../images/logo/mocha.png")} alt="mocha"/>
                          <img className="image_size" style={{width: 180, height: 180}}
                            src={require("../../images/logo/chai.png")} alt="chai"/>
                          <img className="image_size" style={{width: 180, height: 180}}
                            src={require("../../images/logo/selenium.png")} alt="selenium" />
                          <img className="image_size" style={{width: 180, height: 180}}
                            src={require("../../images/logo/django.png")} alt="django"/>
                          <img className="image_size" style={{width: 180, height: 180}}
                            src={require("../../images/logo/uml.png")} alt="uml"/>
                          <img className="image_size" style={{width: 180, height: 180}}
                            src={require("../../images/logo/grammarly.jpeg")} alt="grammarly"/>
                        </Col>
                    </Container>
                    {/*<Footer/>*/}
                </main>
            </Container>
        );
    }
}

export default AboutPage;
