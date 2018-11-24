import React, {Component} from 'react';
import Carousel from './Carousel';
import './LandingPage.css'
import TextWrapper from "../Search/TextWrapper";
import {Link} from 'react-router-dom';


class LandingPage extends Component {
    render() {
        return (
            <div>
                <main role="main">
                    <Carousel/>
                    <p className="mission"><TextWrapper>
                        Here at Equal Education, our mission is to help people find charitable organizations that
                        support education in their desired region. Equal Education focuses on low income areas and
                        highlights statistics about the surrounding community to raise awareness for these impoverished
                        areas. We make it possible to donate or volunteer with these organizations and make a difference
                        in a child's education.</TextWrapper>
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div className="card text-center">
                                    <div className="card-body" id="landing-cards">
                                        <h5 className="card-title">School Districts</h5>
                                        <p className="card-text">Low income school districts in America.</p>
                                        <Link to={'/schools'}> Learn More </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card text-center">
                                    <div className="card-body" id="landing-cards">
                                        <h5 className="card-title">Charities</h5>
                                        <p className="card-text">Charitable organizations involved in education.</p>
                                        <Link to={'/charities'}> Learn More </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card text-center">
                                    <div className="card-body" id="landing-cards">
                                        <h5 className="card-title">Communities</h5>
                                        <p className="card-text">Communities involved in low income school districts.</p>
                                        <Link to={'/communities'}> Learn More </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <p></p>
                    <p></p>
                    <p></p>
                    </div>
                </main>
            </div>
        );
    }
}


export default LandingPage;
