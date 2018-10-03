import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import footer from "./images/static/khambrelfoundationfooterlogo.jpg";
import texas from "./images/static/texascity.jpg";
import volunteer from "./images/volunteers-placeholder.jpg";
import Link from "react-router-dom/es/Link";

class CharityEntity2 extends Component {


    render() {
        return (
            <div>
                <Header/>
                <main role="main">
                    <div>
                        <div className="container mt-5">
                            <div className="jumbotron">
                                <h1 className="display-4 text-center">Khambrel Foundation</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <img src={footer} className="img-fluid rounded" alt="Khambrel Foundation" />
                                </div>
                                <div className="col-md-6">
                                    <p className="lead text-center">Located at: <strong>2619 Bellview St.</strong></p><p className="lead text-center"><strong>La Marque, TX 77568-3709</strong></p><p />
                                    <p className="lead text-center">Ruling Date: <strong>August, 2017</strong></p>
                                    <p className="lead text-center">Deductibility: <strong>Contributions are deductible.</strong></p>
                                    <p className="lead text-center">Website URL: <a href="https://khambrelfoundation.org" className="text-dark"><strong>khambrelfoundation.org</strong></a></p>
                                    <p className="lead text-center">Mission Statement:
                                        <strong>Khambrel Foundation is a non-profit organization empowering youth and their families to build on life’s dreams,
                                            build dreams one book at a time through financial literacy, support single-parent families in need with in-kind donations
                                            and promote kindness in the community.
                                        </strong>
                                    </p>
                                    <div className="text-center">
                                        <a href="https://www.charitynavigator.org/index.cfm?bay=search.profile&ein=811652555" className="btn btn-primary center">Source</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="featurette-divider" />
                        <div className="container my-5">
                            <h1 className="display-4 text-center">Schools and Events</h1>
                            <br />
                            <br />
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="card" style={{width: '18rem'}}>
                                        <img className="card-img-top" src={texas} alt="Texas City School District" />
                                        <div className="card-body text-center d-flex flex-column">
                                            <h5 className="card-title">Texas City Independent School District</h5>
                                            <ul className="list-unstyled mt-auto">
                                                <li className="card-text text-left">
                                                    Texas City ISD has 14 schools and nearly 9,000 students in 78.31 square miles of La Marque and Texas City.
                                                    The District grew by nearly one third of its population with the annexation of La Marque ISD into Texas City ISD on July 1, 2016.
                                                </li>
                                            </ul>
                                            <Link to="/school/2" className="mt-auto btn btn-primary">More Details</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="card" style={{width: '18rem'}}>
                                        <img className="card-img-top" src={volunteer} alt="Oakland Volunteer" />
                                        <div className="card-body text-center d-flex flex-column">
                                            <h5 className="card-title">Dream Builders Coordinator</h5>
                                            <ul className="list-unstyled mt-auto">
                                                <li className="card-text text-left">
                                                    Help coordinate volunteer activities for Khambrel Foundation Dream Builders program for 1 to 4 hours a month for age groups:
                                                    B&amp;G Dream Builders (ages 3-5), Super Kind Kids (ages 6-12) and Dream Builders (ages 13-17).
                                                </li>
                                            </ul>
                                            <Link to="/volunteer/2" className="mt-auto btn btn-primary">View Events</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer/>
                </main>
            </div>
        );
    }
}

export default CharityEntity2;
