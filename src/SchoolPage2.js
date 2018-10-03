import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import oaklandFund from './images/static/oaklandfund.jpg';
import oakland from './images/static/oakland.jpg';
import volunteer from './images/volunteers-placeholder.jpg';
import Link from "react-router-dom/es/Link";
import texascity from "./images/static/texascity.jpg";
import khamfooter from "./images/static/khambrelfoundationfooterlogo.jpg"

class SchoolPage2 extends Component {


    render() {
        return (
            <div>
                <Header/>
                <main role="main">
                    <div>
                        <div className="container mt-5">
                            <div className="jumbotron">
                                <h1 className="display-4 text-center">Texas City Independent School District</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <img src={texascity} className="img-fluid rounded" alt="Texas City" />
                                </div>
                                <div className="col-md-6">
                                    <p className="lead text-center">Location: <strong>Texas</strong></p>
                                    <p className="lead text-center">Estimated # of Families w/ Children Ages 5-17 Below Poverty Level:
                                        <strong>1,594</strong>
                                    </p>
                                    <p className="lead text-center">Description:
                                        <strong>Texas City ISD has 14 schools and nearly 9,000 students in 78.31 square miles of La Marque and Texas City. The District grew by nearly one third of
                                            its population with the annexation of La Marque ISD into Texas City ISD on July 1, 2016.
                                            <br />
                                            <br />
                                            As the State of Texas continues to raise the standards of education, we are proud that our students and teachers in Texas City ISD are working hard to meet and exceed those standards.
                                        </strong>
                                    </p>
                                    <div className="text-center">
                                        <a href="https://www.tcisd.org/our-district" className="btn btn-primary center">Source</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="featurette-divider" />
                        <div className="container my-5">
                            <h1 className="display-4 text-center">Organizations and Events</h1>
                            <br />
                            <br />
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="card" style={{width: '18rem'}}>
                                        <img className="card-img-top" src={khamfooter} alt="Khambrel Foundation" />
                                        <div className="card-body text-center d-flex flex-column">
                                            <h5 className="card-title">Khambrel Foundation</h5>
                                            <ul className="list-unstyled mt-auto">
                                                <li className="card-text text-left">
                                                    Khambrel Foundation is a non-profit organization empowering youth and their families to build on life’s dreams, build dreams one book at a
                                                    time through financial literacy, support single-parent families in need with in-kind donations and promote kindness in the community.
                                                </li>
                                            </ul>
                                            <Link to="/charity/2" className="mt-auto btn btn-primary">More Details</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="card" style={{width: '18rem'}}>
                                        <img className="card-img-top" src={volunteer} alt="Volunteer Event" />
                                        <div className="card-body text-center d-flex flex-column">
                                            <h5 className="card-title">Dream Builders Coordinator</h5>
                                            <ul className="list-unstyled mt-auto">
                                                <li className="card-text text-left">
                                                    Help coordinate volunteer activities for Khambrel Foundation Dream Builders program for 1 to 4 hours a month for age groups:
                                                    B&amp;G Dream Builders (ages 3-5), Super Kind Kids (ages 6-12) and Dream Builders (ages 13-17).
                                                </li>
                                            </ul>
                                            <Link to="/volunteer/2" className="mt-auto btn btn-primary">View Event</Link>
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

export default SchoolPage2;
