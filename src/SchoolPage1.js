import React, {Component} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import oaklandFund from './images/static/oaklandfund.jpg';
import oakland from './images/static/oakland.jpg';
import volunteer from './images/volunteers-placeholder.jpg';
import Link from "react-router-dom/es/Link";


class SchoolPage1 extends Component {


    render() {
        return (
            <div>
                <Header/>
                <main role="main">

                    <div>
                        <div className="container mt-5">
                            <div className="jumbotron">
                                <h1 className="display-4 text-center">Oakland Unified School District</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <img src={oakland} className="img-fluid rounded" alt="Oakland"/>
                                </div>
                                <div className="col-md-6">
                                    <p className="lead text-center">Location: <strong>California</strong></p>
                                    <p className="lead text-center">Estimated # of Families w/ Children Ages 5-17 Below
                                        Poverty Level:
                                        <strong>12817</strong>
                                    </p>
                                    <p className="lead text-center">Description:
                                        <strong>Oakland Unified School District is a public education school district
                                            that operates about 86 elementary schools (K-5),
                                            middle schools (6-8), and high schools (9-12) and 32 district-authorized
                                            charter schools in Oakland, California, United States
                                            serving 49,000 students.
                                        </strong>
                                    </p>
                                    <div className="text-center">
                                        <a href="https://en.wikipedia.org/wiki/Oakland_Unified_School_District"
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
                                <div className="card" style={{width: '18rem'}}>
                                    <img className="card-img-top" src={oaklandFund} alt="Oakland Fund"/>
                                    <div className="card-body text-center d-flex flex-column">
                                        <h5 className="card-title">Oakland Public Education Fund</h5>
                                        <ul className="list-unstyled mt-auto">
                                            <li className="card-text text-left">
                                                The Ed Fund is the only organization that raises money for all
                                                Oakland schools.
                                                We have raised over $60 million in the last five years to put the
                                                right tools in our students’ hands
                                                so that all kids thrive.
                                            </li>
                                        </ul>
                                        <Link to="/charity/1" className="mt-auto btn btn-primary">More
                                            Details</Link>
                                    </div>
                                </div>
                                <div className="card" style={{width: '18rem'}}>
                                    <img className="card-img-top" src={volunteer} alt="Oakland Fund"/>
                                    <div className="card-body text-center d-flex flex-column">
                                        <h5 className="card-title">Seeking Operations Volunteer for Public Education
                                            Fund</h5>
                                        <ul className="list-unstyled mt-auto">
                                            <li className="card-text text-left">
                                                We are seeking volunteering to help us on-board volunteer tutors
                                                into classrooms across Oakland and
                                                provide excellent customer service to all of the teachers, parents,
                                                and education professionals that we
                                                engage with.
                                            </li>
                                        </ul>
                                        <Link to="/volunteer/1" className="mt-auto btn btn-primary">View
                                            Event</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="featurette-divider"/>
                    </div>


                    {/* /.container */}
                    {/* FOOTER */}
                    <Footer/>
                </main>
            </div>
        );
    }
}

export default SchoolPage1;
