import React, {Component} from 'react';
import Carousel from './Carousel';
import './LandingPage.css'
import TextWrapper from "../Search/TextWrapper";


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
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <div class="card text-center">
                                    <div class="card-body" id="landing-cards">
                                        <h5 class="card-title">School Districts</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="/schools" class="btn btn-primary">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm">
                                <div class="card text-center">
                                    <div class="card-body" id="landing-cards">
                                        <h5 class="card-title">Charities</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="/charities" class="btn btn-primary">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm">
                                <div class="card text-center">
                                    <div class="card-body" id="landing-cards">
                                        <h5 class="card-title">Communities</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="/communties" class="btn btn-primary">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}


export default LandingPage;
