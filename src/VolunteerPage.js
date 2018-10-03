import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
// import './App.css';
import prathvol from "./images/static/prathamvolunteer.jpg";
import image from './images/district-placeholder.jpg'
import Link from "react-router-dom/es/Link";

class VolunteerPage extends Component {


    render() {
        return (
            <div>
                <Header/>
                <main role="main">
                    <div className="container marketing my-5">
                        {/* <hr class="featurette-divider"> */}
                        <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: '#659dbd'}}>
                            <span className="navbar-brand">Volunteer Events</span>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Filter by State
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">Alabama</a>
                                            <a className="dropdown-item" href="#">Alaska</a>
                                            <a className="dropdown-item" href="#">Arizona</a>
                                            <a className="dropdown-item" href="#">Arkansas</a>
                                            <a className="dropdown-item" href="#">California</a>
                                            <a className="dropdown-item" href="#">Colorado</a>
                                            <a className="dropdown-item" href="#">Connecticut</a>
                                            <a className="dropdown-item" href="#">Delaware</a>
                                            <a className="dropdown-item" href="#">Florida</a>
                                            <a className="dropdown-item" href="#">Georgia</a>
                                            <a className="dropdown-item" href="#">Hawaii</a>
                                            <a className="dropdown-item" href="#">Idaho</a>
                                            <a className="dropdown-item" href="#">Illinois</a>
                                            <a className="dropdown-item" href="#">Indiana</a>
                                            <a className="dropdown-item" href="#">Iowa</a>
                                            <a className="dropdown-item" href="#">Kansas</a>
                                            <a className="dropdown-item" href="#">Kentucky</a>
                                            <a className="dropdown-item" href="#">Louisiana</a>
                                            <a className="dropdown-item" href="#">Maine</a>
                                            <a className="dropdown-item" href="#">Maryland</a>
                                            <a className="dropdown-item" href="#">Massachusetts</a>
                                            <a className="dropdown-item" href="#">Michigan</a>
                                            <a className="dropdown-item" href="#">Minnesota</a>
                                            <a className="dropdown-item" href="#">Mississippi</a>
                                            <a className="dropdown-item" href="#">Missouri</a>
                                            <a className="dropdown-item" href="#">Montana</a>
                                            <a className="dropdown-item" href="#">Nebraska</a>
                                            <a className="dropdown-item" href="#">Nevada</a>
                                            <a className="dropdown-item" href="#">New Hampshire</a>
                                            <a className="dropdown-item" href="#">New Jersey</a>
                                            <a className="dropdown-item" href="#">New Mexico</a>
                                            <a className="dropdown-item" href="#">New York</a>
                                            <a className="dropdown-item" href="#">North Carolina</a>
                                            <a className="dropdown-item" href="#">North Dakota</a>
                                            <a className="dropdown-item" href="#">Ohio</a>
                                            <a className="dropdown-item" href="#">Oklahoma</a>
                                            <a className="dropdown-item" href="#">Oregon</a>
                                            <a className="dropdown-item" href="#">Pennsylvania</a>
                                            <a className="dropdown-item" href="#">Rhode Island</a>
                                            <a className="dropdown-item" href="#">South Carolina</a>
                                            <a className="dropdown-item" href="#">South Dakota</a>
                                            <a className="dropdown-item" href="#">Tennessee</a>
                                            <a className="dropdown-item" href="#">Texas</a>
                                            <a className="dropdown-item" href="#">Utah</a>
                                            <a className="dropdown-item" href="#">Vermont</a>
                                            <a className="dropdown-item" href="#">Virginia</a>
                                            <a className="dropdown-item" href="#">Washington</a>
                                            <a className="dropdown-item" href="#">West Virginia</a>
                                            <a className="dropdown-item" href="#">Wisconsin</a>
                                            <a className="dropdown-item" href="#">Wyoming</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Sort By
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">Date</a>
                                            <a className="dropdown-item" href="#">Event Name</a>
                                            <a className="dropdown-item" href="#">Organization</a>
                                        </div>
                                    </li>
                                </ul>
                                <form className="form-inline mt-2 mt-md-0">
                                    <input className="form-control mr-sm-2" type="text"
                                           placeholder="Search for District" aria-label="Search"/>
                                    <button className="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-md-4 text-center d-flex align-items-stretch">
                                <div className="card mb-4 box-shadow">
                                    <div className="distimg"><Link to="/volunteer/1"><img className="card-img-top" src={prathvol} alt /></Link></div>
                                    <div className="card-body">
                                        <h2 className="card-text"><Link to="/volunteer/1" className="text-dark">Seeking Operations Volunteer for Public Education Fund</Link></h2>
                                        <p className="card-text"><span>Location: <strong>Oakland, CA</strong></span></p>
                                        <p className="card-text"><span>Time: <strong>We'll work with your schedule.</strong></span></p>
                                        <p className="card-text"><span>School District(s): <Link to="/school/1" className="text-dark"><strong>Oakland Unified School District</strong></Link></span></p>
                                        <p className="card-text"><span>We are seeking volunteering to help us on-board volunteer tutors into classrooms across Oakland and provide
            excellent customer service to all of the teachers, parents, and education professionals that we engage with.</span></p>
                                        <p className="card-text"><span>Charities Involved: <Link to="/charity/1" className="text-dark"><strong>Oakland Public Education Fund</strong></Link></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center d-flex align-items-stretch">
                                <div className="card mb-4 box-shadow">
                                    <div className="distimg"><Link to="/volunteer/2"><img className="card-img-top" src={prathvol} alt /></Link></div>
                                    <div className="card-body">
                                        <h2 className="card-text"><Link to="/volunteer/2" className="text-dark">Dream Builders Coordinator</Link></h2>
                                        <p className="card-text"><span>Location: <strong>Texas City, TX</strong></span></p>
                                        <p className="card-text"><span>Time: <strong>We'll work with your schedule.</strong></span></p>
                                        <p className="card-text"><span>School District(s): <Link to="/school/2" className="text-dark"><strong>Texas City Independent School District</strong></Link></span></p>
                                        <p className="card-text"><span>Help coordinate volunteer activities for Khambrel Foundation Dream Builders program for 1 to 4 hours a month for age groups:
            B&amp;G Dream Builders (ages 3-5), Super Kind Kids (ages 6-12) and Dream Builders (ages 13-17).</span></p>
                                        <p className="card-text"><span>Charities Involved: <Link to="/charity/2" className="text-dark"><strong>Khambrel Foundation</strong></Link></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center d-flex align-items-stretch">
                                <div className="card mb-4 box-shadow">
                                    <div className="distimg"><Link to="/volunteer/3"><img className="card-img-top" src={prathvol} alt /></Link></div>
                                    <div className="card-body">
                                        <h2 className="card-text"><a href="volunteer3.html" className="text-dark">Houston Holiday Luncheon 2018</a></h2>
                                        <p className="card-text"><span>Location: <strong>Houston, TX</strong></span></p>
                                        <p className="card-text"><span>Time: <strong>FRIDAY, DECEMBER 7, 2018 FROM 11:00 AM TO 1:30 PM</strong></span></p>
                                        <p className="card-text"><span>School District(s): <Link to="/school/3" className="text-dark"><strong>Houston Independent School District</strong></Link></span></p>
                                        <p className="card-text"><span>Save the date for the 2018 Houston holiday luncheon. Proceeds from the event will support Pratham’s vocational training program,
            which empowers young women through education and skills training.</span></p>
                                        <p className="card-text"><span>Charities Involved: <Link to="/charity/3" className="text-dark"><strong>Pratham USA</strong></Link></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FOOTER */}
                    <Footer />
                </main>
                {/* Bootstrap core JavaScript
================================================== */}
                {/* Placed at the end of the document so the pages load faster */}

            </div>);
    }
}

export default VolunteerPage;
