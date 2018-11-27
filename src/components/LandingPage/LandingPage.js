import React, {PureComponent} from 'react';
import Carousel from './Carousel';
import './LandingPage.css'
import TextWrapper from "../Search/TextWrapper";
import {Link} from 'react-router-dom';


class LandingPage extends PureComponent {
    render() {
        return (
            <div>
                <main role="main">
                    <Carousel/>
                    <p className="mission"><TextWrapper>
                        Here at Equal Education our mission is to help people find charitable opportunities to assist 
                        underprivileged children with their education. In today's society, a strong, reliant 
                        education is essential to living a successful life; yet there are many school districts 
                        in America that lack even basic school supplies. We wanted to showcase less fortunate areas 
                        in the US and allow users the opportunity to give their time or financial support to these 
                        communities. We hope that these contributions allow less privileged children have the same 
                        opportunities and benefits as more affluent areas.</TextWrapper>
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
