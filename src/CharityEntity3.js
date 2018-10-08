import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import prathamUSA from "./images/static/prathamUSA.jpg";
import Link from "react-router-dom/es/Link";
import houston from "./images/static/HoustonISD.png";
import prathvol from "./images/static/prathamvolunteer.jpg";

class CharityEntity3 extends Component {


    render() {
        return (
            <div>
                <Header/>
                <main role="main">
                    <div>
                        <div className="container mt-5">
                            <div className="jumbotron">
                                <h1 className="display-4 text-center">Pratham USA</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <img src={prathamUSA} className="img-fluid rounded" alt="Pratham USA"/>
                                </div>
                                <div className="col-md-6">
                                    <p className="lead text-center">Located at: <strong>9703 Richmond Avenue Suite
                                        102</strong></p><p className="lead text-center"><strong>Houston, TX
                                    77042</strong></p><p/>
                                    <p className="lead text-center">Ruling Date: <strong>September, 2004</strong></p>
                                    <p className="lead text-center">Deductibility: <strong>Contributions are
                                        deductible.</strong></p>
                                    <p className="lead text-center">Website URL: <a href="https://prathamusa.org"
                                                                                    className="text-dark"><strong>prathamusa.org</strong></a>
                                    </p>
                                    <p className="lead text-center">Mission Statement:
                                        <strong>Pratham USA is a 501(c)(3) nonprofit organization which supports Pratham
                                            Education Foundation in its mission of improving child literacy, providing
                                            vocational skills
                                            and supporting women to complete their education in India; and encourages
                                            volunteerism in the US.
                                        </strong>
                                    </p>
                                    <div className="text-center">
                                        <a href="https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=7676"
                                           className="btn btn-primary center">Source</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="featurette-divider"/>
                        <div className="container my-5">
                            <h1 className="display-4 text-center">Schools and Organizations</h1>
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="card" style={{width: '18rem'}}>
                                        <img className="card-img-top" src={houston} alt="Houston ISD"/>
                                        <div className="card-body text-center d-flex flex-column">
                                            <h5 className="card-title">Houston Independent School District</h5>
                                            <ul className="list-unstyled mt-auto">
                                                <li className="card-text text-left">
                                                    The Houston Independent School District is the largest school
                                                    district in Texas and the seventh-largest in the United States.
                                                </li>
                                            </ul>
                                            <Link to="/school/3" className="mt-auto btn btn-primary">More Details</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="card" style={{width: '18rem'}}>
                                        <img className="card-img-top" src={prathvol} alt="Oakland Fund"/>
                                        <div className="card-body text-center d-flex flex-column">
                                            <h5 className="card-title">Houston Holiday Luncheon 2018</h5>
                                            <ul className="list-unstyled mt-auto">
                                                <li className="card-text text-left">
                                                    Save the date for the 2018 Houston holiday luncheon. Proceeds from
                                                    the event will support Pratham’s vocational training program,
                                                    which empowers young women through education and skills training.
                                                </li>
                                            </ul>
                                            <Link to="/volunteer/3" className="mt-auto btn btn-primary">View
                                                Events</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="featurette-divider"/>
                    </div>


                    <Footer/>
                </main>
            </div>
        );
    }
}

export default CharityEntity3;
