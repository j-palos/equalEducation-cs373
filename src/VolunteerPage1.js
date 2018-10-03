import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import oaklandFund from './images/static/oaklandfund.jpg';
import oakland from './images/static/oakland.jpg';
import volunteer from './images/volunteers-placeholder.jpg';
import Link from "react-router-dom/es/Link";



class VolunteerPage1 extends Component {


    render() {
        return (
            <div>
                <Header/>
                <main role="main">

                    <div>
                        <div className="container mt-5">
                            <div className="jumbotron">
                                <h1 className="display-4 text-center">Seeking Operations Volunteer for Public Education Fund</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={volunteer} className="img-fluid rounded" alt="Volunteer Public Education Fund" />
                                </div>
                                <div className="col-md-6">
                                    <p className="lead text-center">Place: <strong>520 3rd St. Suite #109 </strong></p><p className="lead text-center"><strong>Oakland, CA 94607</strong></p><p />
                                    <p className="lead text-center">Time: <strong>We'll work with your schedule.</strong></p>
                                    <p className="lead text-center">Minimum Age: <strong>14 (Flexible)</strong></p>
                                    <p className="lead text-center">Skills:
                                        <strong>
                                        </strong></p><ul className="list-unstyled lead text-center"><strong>
                                    <li>Data Entry</li>
                                    <li>Executive Admin</li>
                                    <li>Administrative Support</li>
                                    <li>General Education</li>
                                    <li>Customer Service</li>
                                </strong></ul><strong>
                                </strong>
                                    <p />
                                    <p className="lead text-center">Description:
                                        <strong>The Oakland Public Education Fund connects public schools with tools, funs, and volunteers so all students can thrive. In a large, urban school district like Oakland,
                                            recruiting additional resources for students is so important, and we invite you to join our work! We are seeking volunteering to help us on-board volunteer tutors into classrooms
                                            across Oakland and provide excellent customer service to all of the teachers, parents, and education professionals that we engage with.
                                        </strong>
                                    </p>
                                    <div className="text-center">
                                        <a href="https://www.volunteermatch.org/search/opp3015109.jsp" className="btn btn-primary center">Source</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="featurette-divider" />
                        <div className="container my-5">
                            <h1 className="display-4 text-center">Schools and Organizations</h1>
                            <br />
                            <br />
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="card" style={{width: '18rem'}}>
                                        <img className="card-img-top" src={oaklandFund} alt="Oakland Unified School District" />
                                        <div className="card-body text-center d-flex flex-column">
                                            <h5 className="card-title">Oakland Unified School District</h5>
                                            <ul className="list-unstyled mt-auto">
                                                <li className="card-text text-left">
                                                    Oakland Unified School District is a public education school district that operates about 86 elementary schools (K-5),
                                                    middle schools (6-8), and high schools (9-12) and 32 district-authorized charter schools in Oakland, California, United States
                                                    serving 49,000 students.
                                                </li>
                                            </ul>
                                            <Link to="/school/1" className="mt-auto btn btn-primary">More Details</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="card" style={{width: '18rem'}}>
                                        <img className="card-img-top" src={oakland} alt="Oakland Fund" />
                                        <div className="card-body text-center d-flex flex-column">
                                            <h5 className="card-title">Oakland Public Education Fund</h5>
                                            <ul className="list-unstyled mt-auto">
                                                <li className="card-text text-left">
                                                    The Ed Fund is the only organization that raises money for all Oakland schools.
                                                    We have raised over $60 million in the last five years to put the right tools in our students’ hands
                                                    so that all kids thrive.
                                                </li>
                                            </ul>
                                            <Link to="/charity/1" className="mt-auto btn btn-primary">View Org</Link>
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

export default VolunteerPage1;
