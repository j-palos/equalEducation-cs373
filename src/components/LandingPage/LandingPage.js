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
                    <p className="mission"><TextWrapper
                        text={"Here at Equal Education, our mission is to help people find charitable organizations that support education  in their desired region. Equal Education focuses on low income areas and highlights statistics about the surrounding community to raise awareness for these impoverished areas. We make it possible to donate or volunteer with these organizations and make a difference in a child's education."}/>
                    </p>
                    <div className="container marketing">
                    </div>
                </main>
            </div>
        );
    }
}


export default LandingPage;
