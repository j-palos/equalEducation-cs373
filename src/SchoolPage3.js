import React, {Component} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "react-router-dom/es/Link";
import houstonisd from "./images/static/HoustonISD.png";
import prathamusa from "./images/static/prathamUSA.jpg";
import prathvol from "./images/static/prathamvolunteer.jpg";

class SchoolPage3 extends Component {


    render() {
        return (
            <div>
                <Header/>
                <main role="main">
                    <div>
                        <div className="container mt-5">
                            <div className="jumbotron">
                                <h1 className="display-4 text-center">Houston Independent School District</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <img src={houstonisd} className="img-fluid rounded" alt="Houston ISD"/>
                                </div>
                                <div className="col-md-6">
                                    <p className="lead text-center">Location: <strong>Texas</strong></p>
                                    <p className="lead text-center">Estimated # of Families w/ Children Ages 5-17 Below
                                        Poverty Level:
                                        <strong>76,878</strong>
                                    </p>
                                    <p className="lead text-center">Description:
                                        <strong>The Houston Independent School District is the largest school district
                                            in Texas and the seventh-largest in the United States.
                                            It serves approximately 215,000 students at 283 campuses and is one of the
                                            largest employers in Houston, with about 29,000 team members.
                                        </strong>
                                    </p>
                                    <div className="text-center">
                                        <a href="https://www.houstonisd.org/domain/7892"
                                           className="btn btn-primary center">Source</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="featurette-divider"/>
                        <div className="container my-5">
                            <h1 className="display-4 text-center">Organizations and Events</h1>
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="card" style={{width: '18rem'}}>
                                        <img className="card-img-top" src={prathamusa} alt="Pratham USA"/>
                                        <div className="card-body text-center d-flex flex-column">
                                            <h5 className="card-title">Pratham USA</h5>
                                            <ul className="list-unstyled mt-auto">
                                                <li className="card-text text-left">
                                                    Pratham USA is a volunteer-driven organization with 16 chapters
                                                    across the United States
                                                    that raise awareness and mobilize financial resources for our work
                                                    on the ground.
                                                </li>
                                            </ul>
                                            <Link to="/charity/3" className="mt-auto btn btn-primary">More
                                                Details</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="card" style={{width: '18rem'}}>
                                        <img className="card-img-top" src={prathvol} alt="Volunteer Event"/>
                                        <div className="card-body text-center d-flex flex-column">
                                            <h5 className="card-title">Houston Holiday Luncheon 2018</h5>
                                            <ul className="list-unstyled mt-auto">
                                                <li className="card-text text-left">
                                                    Save the date for the 2018 Houston holiday luncheon. Proceeds from
                                                    the event will support Pratham’s
                                                    vocational training program, which empowers young women through
                                                    education and skills training.
                                                </li>
                                            </ul>
                                            <Link to="/volunteer/3" className="mt-auto btn btn-primary">View
                                                Event</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* /.container */}
                    {/* FOOTER */}
                    <Footer/>
                </main>
            </div>
        );
    }
}

export default SchoolPage3;
