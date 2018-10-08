import React, {Component} from 'react';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import oaklandImage from './images/static/oaklandfund.jpg';
import prathamImage from './images/static/prathamUSA.jpg';
import khambrelImage from './images/static/khambrelfoundationfooterlogo.jpg';
import Link from "react-router-dom/es/Link";


class CharityPage extends Component {


    render() {
        return (

            <div>
                <Header/>
                <main role="main">
                    <div className="container marketing my-5">
                        {/* <hr class="featurette-divider"> */}
                        <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: '#659dbd'}}>
                            <span className="navbar-brand">Charities</span>
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
                                            <a className="dropdown-item" href="#">Date Established</a>
                                            <a className="dropdown-item" href="#">Charity Name</a>
                                            <a className="dropdown-item" href="#">Rating</a>
                                        </div>
                                    </li>
                                </ul>
                                <form className="form-inline mt-2 mt-md-0">
                                    <input className="form-control mr-sm-2" type="text"
                                           placeholder="Search for Charities" aria-label="Search"/>
                                    <button className="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-md-4 text-center d-flex align-items-stretch">
                                <div className="card mb-4 box-shadow">
                                    <div className="distimg"><Link to={'charity/1'}><img className="card-img-top"
                                                                                         src={oaklandImage} alt/></Link>
                                    </div>
                                    <div className="card-body">
                                        <h2 className="card-text"><Link to={'charity/1'} className="text-dark">Oakland
                                            Public Education Fund</Link></h2>
                                        <p className="card-text"><span>Location: <strong>Oakland, CA</strong></span></p>
                                        <p className="card-text"><span>Deductibility: <strong>Contributions are deductible.</strong></span>
                                        </p>
                                        <p className="card-text">
                                            <span>Ruling Date: <strong>November, 2003</strong></span></p>
                                        <p className="card-text"><span>The Ed Fund is the only organization that raises money for all Oakland schools.
              We have raised over $60 million in the last five years to put the right tools in out students' hands so that all kids thrive.</span>
                                        </p>
                                        <p className="card-text"><span>Volunteering Events: <Link to={'volunteer/1'}
                                                                                                  className="text-dark"><strong>Seeking Operations Volunteer for Public Education Fund</strong></Link></span>
                                        </p>
                                        <p className="card-text"><span>School(s) Associated: <Link to={'charity/1'}
                                                                                                   className="text-dark"><strong>Oakland Unified School District</strong></Link></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center d-flex align-items-stretch">
                                <div className="card mb-4 box-shadow">
                                    <div className="distimg"><Link to="charity/2"><img className="card-img-top"
                                                                                       src={khambrelImage} alt/></Link>
                                    </div>
                                    <div className="card-body">
                                        <h2 className="card-text"><Link to="charity/2" className="text-dark">Khambrel
                                            Foundation</Link></h2>
                                        <p className="card-text"><span>Location: <strong>La Marque, TX</strong></span>
                                        </p>
                                        <p className="card-text"><span>Deductibility: <strong>Contributions are deductible.</strong></span>
                                        </p>
                                        <p className="card-text"><span>Ruling Date: <strong>August, 2017</strong></span>
                                        </p>
                                        <p className="card-text"><span>Khambrel Foundation is a non-profit organization empowering youth and their families to build on life’s dreams, build dreams one book at a time through financial literacy,
              support single-parent families in need with in-kind donations and promote kindness in the community.</span>
                                        </p>
                                        <p className="card-text"><span>Volunteering Events: <Link to='/volunteer/2'
                                                                                                  className="text-dark"><strong>Dream Builders Coordinator</strong></Link></span>
                                        </p>
                                        <p className="card-text"><span>School(s) Associated: <Link to='/school/2'
                                                                                                   className="text-dark"><strong>Texas City Independent School District</strong></Link></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center d-flex align-items-stretch">
                                <div className="card mb-4 box-shadow">
                                    <div className="distimg"><Link to="charity/3"><img className="card-img-top"
                                                                                       src={prathamImage} alt/></Link>
                                    </div>
                                    <div className="card-body">
                                        <h2 className="card-text"><Link to="charity/3" className="text-dark">Pratham
                                            USA</Link></h2>
                                        <p className="card-text"><span>Location: <strong>Houston, TX</strong></span></p>
                                        <p className="card-text"><span>Deductibility: <strong>Contributions are deductible.</strong></span>
                                        </p>
                                        <p className="card-text">
                                            <span>Ruling Date: <strong>September, 2004</strong></span></p>
                                        <p className="card-text"><span>Pratham USA is a 501(c)(3) nonprofit organization which supports Pratham Education Foundation in its mission of improving child literacy,
              providing vocational skills and supporting women to complete their education in India; and encourages volunteerism in the US.</span>
                                        </p>
                                        <p className="card-text"><span>Volunteering Events: <Link to="volunteer/3"
                                                                                                  className="text-dark"><strong>Houston Holiday Luncheon 2018</strong></Link></span>
                                        </p>
                                        <p className="card-text"><span>School(s) Associated: <Link to="school/3"
                                                                                                   className="text-dark"><strong>Houston Independent School District</strong></Link></span>
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
            </div>
        )
    }
}

export default CharityPage;
