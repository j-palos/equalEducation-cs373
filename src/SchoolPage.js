import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
// import './App.css';
import Link from "react-router-dom/es/Link";
import oakland from "./images/static/oakland.jpg";
import houston from "./images/static/texascity.jpg";
import houstonisd from "./images/static/HoustonISD.png";
import SortBar from "./SortBar"

class SchoolPage extends Component {


    render() {
        return (
            <div>
                <Header/>
                <main role="main">
                    <div className="container marketing my-5">
                        {/* <hr class="featurette-divider"> */}
                        <SortBar />
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-md-4 text-center d-flex align-items-stretch">
                                <div className="card mb-4 box-shadow">
                                    <div className="distimg"><Link to="school/1"><img className="card-img-top"
                                                                                      src={oakland} alt/></Link></div>
                                    <div className="card-body">
                                        <h2 className="card-text"><Link to="school/1" className="text-dark">Oakland
                                            Oakland Unified School District</Link></h2>
                                        <p className="card-text">
                                            <span>Location: <strong>Oakland, California</strong></span></p>
                                        <p className="card-text"><span>Population under Poverty: <strong>12,817</strong></span>
                                        </p>
                                        <p className="card-text"><span>Oakland Unified School District is a public education school district that operates about 86 elementary schools (K-5),
            middle schools (6-8), and high schools (9-12) and 32 district-authorized charter schools in Oakland, California, United States serving 49,000 students.</span>
                                        </p>
                                        <p className="card-text"><span>Opportunities Available: <Link to="volunteer/1"
                                                                                                      className="text-dark"><strong>Seeking Operations Volunteer for Public Education Fund</strong></Link></span>
                                        </p>
                                        <p className="card-text"><span>Charities Involved: <Link to="charity/1"
                                                                                                 className="text-dark"><strong>Oakland Public Education Fund</strong></Link></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center d-flex align-items-stretch">
                                <div className="card mb-4 box-shadow">
                                    <div className="distimg"><Link to="school/2"><img className="card-img-top"
                                                                                      src={houston} alt/></Link></div>
                                    <div className="card-body">
                                        <h2 className="card-text"><Link to="school/2" className="text-dark">Texas City
                                            Independent School District</Link></h2>
                                        <p className="card-text">
                                            <span>Location: <strong>Texas City, Texas</strong></span></p>
                                        <p className="card-text"><span>Population under Poverty: <strong>1,594</strong></span>
                                        </p>
                                        <p className="card-text"><span>Texas City ISD has 14 schools and nearly 9,000 students in 78.31 square miles of La Marque and Texas City. </span>
                                        </p>
                                        <p className="card-text"><span>Opportunities Available: <Link to="volunteer/2"
                                                                                                      className="text-dark"><strong>Dream Builders Coordinator</strong></Link></span>
                                        </p>
                                        <p className="card-text"><span>Charities Involved: <Link to="charity/2"
                                                                                                 className="text-dark"><strong>Khambrel Foundation</strong></Link></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center d-flex align-items-stretch">
                                <div className="card mb-4 box-shadow">
                                    <div className="distimg"><Link to="school/3"><img className="card-img-top"
                                                                                      src={houstonisd} alt/></Link>
                                    </div>
                                    <div className="card-body">
                                        <h2 className="card-text"><Link to="school/3" className="text-dark">Houston
                                            Independent School District</Link></h2>
                                        <p className="card-text"><span>Location: <strong>Houston, Texas</strong></span>
                                        </p>
                                        <p className="card-text"><span>Population under Poverty: <strong>76,878</strong></span>
                                        </p>
                                        <p className="card-text"><span>The Houston Independent School District is the largest school district in Texas and the seventh-largest in the United States.</span>
                                        </p>
                                        <p className="card-text"><span>Opportunities Available: <Link to="volunteer/3"
                                                                                                      className="text-dark"><strong>Houston Holiday Luncheon 2018</strong></Link></span>
                                        </p>
                                        <p className="card-text"><span>Charities Involved: <Link to="charity/3"
                                                                                                 className="text-dark"><strong>Pratham USA</strong></Link></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr className="featurette-divider"/>
                    {/* FOOTER */}
                    <Footer/>
                </main>
                {/* Bootstrap core JavaScript
  ================================================== */}
                {/* Placed at the end of the document so the pages load faster */}
            </div>);
    }
}

export default SchoolPage;
