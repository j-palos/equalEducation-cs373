import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
// import './App.css';
class VolunteerPage extends Component {



    render() {
        return (
            <div>
                <Header />
                <main role="main">
                    <div className="container marketing my-5">
                        {/* <hr class="featurette-divider"> */}
                        <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: '#659dbd'}}>
                            <span className="navbar-brand">Volunteer Events</span>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search for District" aria-label="Search" />
                                    <button className="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                        <br />
                        <br />
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <div className="card mb-4 box-shadow">
                                    <div className="distimg"><a href="#"><img className="card-img-top" src="images/district-placeholder.jpg" alt /></a></div>
                                    <div className="card-body">
                                        <h2 className="card-text"><a href="#">Event #1</a></h2>
                                        <p className="card-text"><span>Location</span></p>
                                        <p className="card-text"><span>Description</span></p>
                                        <p className="card-text"><span>Skills Required</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="card mb-4 box-shadow">
                                    <div className="distimg"><a href="#"><img className="card-img-top" src="images/district-placeholder.jpg" alt /></a></div>
                                    <div className="card-body">
                                        <h2 className="card-text"><a href="#">Event #2</a></h2>
                                        <p className="card-text"><span>Location</span></p>
                                        <p className="card-text"><span>Description</span></p>
                                        <p className="card-text"><span>Skills Required</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="card mb-4 box-shadow">
                                    <div className="distimg"><a href="#"><img className="card-img-top" src="images/district-placeholder.jpg" alt /></a></div>
                                    <div className="card-body">
                                        <h2 className="card-text"><a href="#">Event #3</a></h2>
                                        <p className="card-text"><span>Location</span></p>
                                        <p className="card-text"><span>Description</span></p>
                                        <p className="card-text"><span>Skills Required</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                    {/* FOOTER */}
                    <Footer />
                </main>
                {/* Bootstrap core JavaScript
================================================== */}
                {/* Placed at the end of the document so the pages load faster */}

            </div>        );
    }
}

export default VolunteerPage;