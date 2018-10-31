import React, {Component, Link} from 'react';
import './styles.css'
import '../../styles/carousel.css';
import '../../styles/bootstrap-4.1.3-dist/css/bootstrap.min.css';
import {CardDeck, Col, Container, Row} from 'reactstrap';
import PersonCard from "../PersonCard";
import AboutHelper from "../AboutHelper";

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
            <Container className="marketing">
                <main role="main">
                    <Row className="featurette first-row-margin">
                        <Col>
                            <h1 className="h1-style">About the Site</h1>
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
                            <h1 className="h1-style">About our Data</h1>
                            <p className="lead">Charity Navigator, Census Govt, Wikipedia (RESTful APIs)</p>
                            <a href="https://documenter.getpostman.com/view/5488016/RWgm41VA" className="lead">Postman API</a>


                        </Col>
                    </Row>

                    <hr className="featurette-divider"/>
                    <Row className={"featurette"}>
                      <Col>
                        <h1 className="h1-style">About Us</h1>
                      </Col>
                        <CardDeck className="margin-bottom">
                            <PersonCard className="card-top-padding" name={'Jesus'}/>
                            <PersonCard className="card-top-padding" name={'Prateek'}/>
                            <PersonCard className="card-top-padding" name={'Intae'}/>
                        </CardDeck>
                    </Row>
                    <Row className={"featurette"}>
                        <CardDeck>
                            <PersonCard name={'Andrew'}/>
                            <PersonCard name={'Kyle'}/>
                            <PersonCard name={'Ailyn'}/>
                        </CardDeck>
                    </Row>

                    <hr className={"featurette-divider"}/>
                    <Row className={"featurette"}>
                        <Col><h1 className="h1-style">Statistics</h1></Col>
                        <AboutHelper/>
                    </Row>

                    <hr className={"featurette-divider"}/>
                    <h1 className="h1-style">Tools Used</h1>

                    <Col className="tools">
                		<ul class="caption-style-4">
                			<li>
                				<img src={require("../../images/logo/gitlab.png")} className="img-size" alt="gitlab" />
                				<div class="caption">
                					<div class="blur"></div>
                					<div class="caption-text">
                						<h1>GitLab</h1>
                            <p>Our code is hosted</p>
                					</div>
                				</div>
                			</li>
                			<li>
                				<img src={require("../../images/logo/docker.png")} className="img-size" alt="docker" />
                				<div class="caption">
                					<div class="blur"></div>
                					<div class="caption-text">
                						<h1>Docker</h1>
                						<p>Deploy our backend</p>
                					</div>
                				</div>
                			</li>
                			<li>
                				<img src={require("../../images/logo/gcp.png")} className="img-size" alt="gcp" />
                				<div class="caption">
                					<div class="blur"></div>
                					<div class="caption-text">
                						<h1>Google Cloud Platform</h1>
                						<p>Our project is hosted on GCP</p>
                					</div>
                				</div>
                			</li>
                			<li>
                				<img src={require("../../images/logo/gke.svg")} className="img-size" alt="gke" />
                				<div class="caption">
                					<div class="blur"></div>
                					<div class="caption-text">
                						<h1>Google Kubernetes Engine</h1>
                						<p>Our django app is running on GKE</p>
                					</div>
                				</div>
                			</li>
                			<li>
                				<img src={require("../../images/logo/namecheap.png")} className="img-size" alt="namecheap" />
                				<div class="caption">
                					<div class="blur"></div>
                					<div class="caption-text">
                						<h1>Namecheap</h1>
                						<p>Our domain name is registered from namecheap</p>
                					</div>
                				</div>
                			</li>
                			<li>
                				<img src={require("../../images/logo/react.png")} className="img-size" alt="react" />
                				<div class="caption">
                					<div class="blur"></div>
                					<div class="caption-text">
                						<h1>React</h1>
                						<p>Used React for frontend</p>
                					</div>
                				</div>
                			</li>
                      <li>
                				<img src={require("../../images/logo/postman.png")} className="img-size" alt="postman" />
                				<div class="caption">
                					<div class="blur"></div>
                					<div class="caption-text">
                						<h1>Postman</h1>
                						<p>Design and test our API</p>
                					</div>
                				</div>
                			</li>
                      <li>
                				<img src={require("../../images/logo/slack.png")} className="img-size" alt="slack" />
                				<div class="caption">
                					<div class="blur"></div>
                					<div class="caption-text">
                						<h1>Slack</h1>
                						<p>Main method of communication</p>
                					</div>
                				</div>
                			</li>
                      <li>
                				<img src={require("../../images/logo/mocha.png")} className="img-size" alt="mocha" />
                				<div class="caption">
                					<div class="blur"></div>
                					<div class="caption-text">
                						<h1>Mocha</h1>
                						<p>Testing our frontend</p>
                					</div>
                				</div>
                			</li>
                      <li>
                				<img src={require("../../images/logo/chai.png")} className="img-size" alt="chai" />
                				<div class="caption">
                					<div class="blur"></div>
                					<div class="caption-text">
                						<h1>Chai</h1>
                						<p>Testing our frontend</p>
                					</div>
                				</div>
                			</li>
                      <li>
                				<img src={require("../../images/logo/selenium.png")} className="img-size" alt="selenium" />
                				<div class="caption">
                					<div class="blur"></div>
                					<div class="caption-text">
                						<h1>Selenium</h1>
                						<p>Acceptance test for our frontend</p>
                					</div>
                				</div>
                			</li>
                      <li>
                        <img src={require("../../images/logo/django.png")} className="img-size" alt="django" />
                        <div class="caption">
                          <div class="blur"></div>
                          <div class="caption-text">
                            <h1>Django</h1>
                            <p>Our web framework</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <img src={require("../../images/logo/uml.png")} className="img-size" alt="django" />
                        <div class="caption">
                          <div class="blur"></div>
                          <div class="caption-text">
                            <h1>Plant UML</h1>
                            <p>Created UML diagram</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <img src={require("../../images/logo/grammarly.jpeg")} className="img-size" alt="grammarly" />
                        <div class="caption">
                          <div class="blur"></div>
                          <div class="caption-text">
                            <h1>Grammarly</h1>
                            <p>Check our spelling and grammar</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <img src={require("../../images/logo/bootstrap-logo.png")} className="img-size" alt="bootstrap" />
                        <div class="caption">
                          <div class="blur"></div>
                          <div class="caption-text">
                            <h1>Bootstrap</h1>
                            <p>Front-end design</p>
                          </div>
                        </div>
                      </li>
                		</ul>
                	</Col>
                </main>
            </Container>
        );
    }
}

export default AboutPage;
