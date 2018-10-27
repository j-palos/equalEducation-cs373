import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import oaklandImage from './images/static/oaklandfund.jpg';
import prathamImage from './images/static/prathamUSA.jpg';
import khambrelImage from './images/static/khambrelfoundationfooterlogo.jpg';
import Link from "react-router-dom/es/Link";
import {Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Form, Row} from "reactstrap";
import InfoCard from "./InfoCard";


class CharityPage extends Component {


    render() {
        return (
            <div>
                <main role="main">
                    <div className="container marketing my-5">
                        <br/><br/>
                        <InfoCard type="charity"/>
                        <hr className="featurette-divider"/>
                    </div>
                </main>
            </div>
        );
    }
}

export default CharityPage;
