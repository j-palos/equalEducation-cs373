import React, {PureComponent} from 'react';
import Carousel from './Carousel';
import './LandingPage.css'
import TextWrapper from "../Search/TextWrapper";
import {Link} from 'react-router-dom';


class LandingPage extends PureComponent {
    toSchool = () => {
        this.props.history.push('/schools');
      };

    toCharity = () => {
        this.props.history.push('/charities');
    };

    toCommunity = () => {
        this.props.history.push('/communities');
    };
    
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
                            <div className="col-sm d-flex align-items-stretch">
                                <div className="card text-center">
                                    <div className="card-body" id="landing-cards">
                                        <h5 className="card-title">School Districts</h5>
                                        <img class="card-img-top-new" src="/images/district-placeholder.jpg" alt="Card image cap"></img>
                                        <p className="card-text">Low income school districts in America.</p>
                                        <button type="button" class="btn btn-primary" onClick={this.toSchool}>
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm d-flex align-items-stretch">
                                <div className="card text-center">
                                    <div className="card-body" id="landing-cards">
                                        <h5 className="card-title">Charities</h5>
                                        <img class="card-img-top-new" src="/images/charity-placeholder.jpg" alt="Card image cap"></img>
                                        <p className="card-text">Charitable organizations involved in education.</p>
                                        <button type="button" class="btn btn-primary" onClick={this.toCharity}>
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm d-flex align-items-stretch">
                                <div className="card text-center">
                                    <div className="card-body" id="landing-cards">
                                        <h5 className="card-title">Communities</h5>
                                        <img class="card-img-top-new" src="/images/volunteers-placeholder.jpg" alt="Card image cap"></img>
                                        <p className="card-text">Communities involved in low income school districts.</p>
                                        <button type="button" class="btn btn-primary" onClick={this.toCommunity}>
                                            Learn More
                                        </button>
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
