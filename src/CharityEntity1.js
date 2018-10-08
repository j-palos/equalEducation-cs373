import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import oaklandFund from './images/static/oaklandfund.jpg';
import oakland from './images/static/oakland.jpg';
import volunteer from './images/volunteers-placeholder.jpg';
import Link from "react-router-dom/es/Link";

class CharityEntity1 extends Component {


    render() {
        return (
            <div>
                <Header/>
                <main role="main">

                    <div>
                        <div className="container mt-5">
                            <div className="jumbotron">
                                <h1 className="display-4 text-center">Oakland Public Education Fund</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <img src={oaklandFund} className="img-fluid rounded"
                                         alt="Oakland Public Education Fund"/>
                                </div>
                                <div className="col-md-6">
                                    <p className="lead text-center">Located at: <strong>PO Box 27148 </strong></p><p
                                    className="lead text-center"><strong>Oakland, CA 94602-0148</strong></p><p/>
                                    <p className="lead text-center">Ruling Date: <strong>November, 2003</strong></p>
                                    <p className="lead text-center">Deductibility: <strong>Contributions are
                                        deductible.</strong></p>
                                    <p className="lead text-center">Website URL: <a href="https://www.oaklandedfund.org"
                                                                                    className="text-dark"><strong>www.oaklandedfund.org</strong></a>
                                    </p>
                                    <p className="lead text-center">Description:
                                        <strong>The Ed Fund is the only organization that raises money for all Oakland
                                            schools. We have raised over $60 million in the
                                            last five years to put the right tools in out students' hands so that all
                                            kids thrive.
                                        </strong>
                                    </p>
                                    <div className="text-center">
                                        <a href="https://www.charitynavigator.org/index.cfm?bay=search.profile&ein=432014630"
                                           className="btn btn-primary center">Source</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="featurette-divider"/>
                        <div className="container my-5">
                            <h1 className="display-4 text-center">Schools and Events</h1>
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="card" style={{width: '18rem'}}>
                                        <img className="card-img-top" src={oakland}
                                             alt="Oakland Unified School District"/>
                                        <div className="card-body text-center d-flex flex-column">
                                            <h5 className="card-title">Oakland Unified School District</h5>
                                            <ul className="list-unstyled mt-auto">
                                                <li className="card-text text-left">
                                                    Oakland Unified School District is a public education school
                                                    district that operates about 86 elementary schools (K-5),
                                                    middle schools (6-8), and high schools (9-12) and 32
                                                    district-authorized charter schools in Oakland, California, United
                                                    States
                                                    serving 49,000 students.
                                                </li>
                                            </ul>
                                            <Link to="/school/1" className="mt-auto btn btn-primary">More Details</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="card" style={{width: '18rem'}}>
                                        <img className="card-img-top" src={volunteer} alt="Oakland Volunteer"/>
                                        <div className="card-body text-center d-flex flex-column">
                                            <h5 className="card-title">Seeking Operations Volunteer for Public Education
                                                Fund</h5>
                                            <ul className="list-unstyled mt-auto">
                                                <li className="card-text text-left">
                                                    We are seeking volunteering to help us on-board volunteer tutors
                                                    into classrooms across Oakland and provide
                                                    excellent customer service to all of the teachers, parents, and
                                                    education professionals that we engage with.
                                                </li>
                                            </ul>
                                            <Link to="/volunteer/1" className="mt-auto btn btn-primary">View
                                                Events</Link>
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

export default CharityEntity1;
