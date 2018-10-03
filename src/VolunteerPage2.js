import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import oaklandFund from './images/static/oaklandfund.jpg';
import oakland from './images/static/oakland.jpg';
import volunteer from './images/volunteers-placeholder.jpg';
import Link from "react-router-dom/es/Link";
import khamb from "./images/static/khambrelfoundationfooterlogo.jpg";
import texas from "./images/static/texascity.jpg";


class VolunteerPage2 extends Component {


    render() {
        return (
            <div>
                <Header/>
                <main role="main">

                    <div>
                        <div className="container mt-5">
                            <div className="jumbotron">
                                <h1 className="display-4 text-center">Dream Builders Coordinator</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={volunteer} className="img-fluid rounded" alt="Volunteer Public Education Fund" />
                                </div>
                                <div className="col-md-6">
                                    <p className="lead text-center">Place: <strong>2010 5th Avenue North</strong></p><p className="lead text-center"><strong>Texas City, TX 77590</strong></p><p />
                                    <p className="lead text-center">Time: <strong>We'll work with your schedule.</strong></p>
                                    <p className="lead text-center">Minimum Age: <strong>At least 18</strong></p>
                                    <p className="lead text-center">Skills:
                                        <strong>
                                        </strong></p><ul className="list-unstyled lead text-center"><strong>
                                    <li>Literacy/Reading</li>
                                    <li>Fundraising</li>
                                    <li>Public Relations</li>
                                    <li>Interactive/Social Media/SEO</li>
                                    <li>Community Outreach</li>
                                </strong></ul><strong>
                                </strong>
                                    <p />
                                    <p className="lead text-center">Description:
                                        <strong>Help coordinate volunteer activities for Khambrel Foundation Dream Builders program for 1 to 4 hours a month for age groups:
                                            B&amp;G Dream Builders (ages 3-5), Super Kind Kids (ages 6-12) and Dream Builders (ages 13-17). Includes attending Day-Camps, teaching
                                            opportunities and to help increase youth participation. Other volunteer opportunities are available for Khambrel Foundation events.
                                        </strong>
                                    </p>
                                    <div className="text-center">
                                        <a href="https://www.volunteermatch.org/search/opp2887952.jsp" className="btn btn-primary center">Source</a>
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
                                        <img className="card-img-top" src={texas} alt="Texas City ISD" />
                                        <div className="card-body text-center d-flex flex-column">
                                            <h5 className="card-title">Texas City Independent School District</h5>
                                            <ul className="list-unstyled mt-auto">
                                                <li className="card-text text-left">
                                                    Texas City ISD has 14 schools and nearly 9,000 students in 78.31 square miles of La Marque and Texas City.
                                                    The District grew by nearly one third of its population with the annexation of La Marque ISD into Texas City
                                                    ISD on July 1, 2016.
                                                </li>
                                            </ul>
                                            <Link to="/school/3" className="mt-auto btn btn-primary">More Details</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="card" style={{width: '18rem'}}>
                                        <img className="card-img-top" src={khamb} alt="Khambrel Foundation" />
                                        <div className="card-body text-center d-flex flex-column">
                                            <h5 className="card-title">Khambrel Foundation</h5>
                                            <ul className="list-unstyled mt-auto">
                                                <li className="card-text text-left">
                                                    Khambrel Foundation is a non-profit organization empowering youth and their families to build on life’s dreams, build dreams one book at a
                                                    time through financial literacy, support single-parent families in need with in-kind donations and promote kindness in the community.
                                                </li>
                                            </ul>
                                            <Link to="/charity/2" className="mt-auto btn btn-primary">View Org</Link>
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

export default VolunteerPage2;
