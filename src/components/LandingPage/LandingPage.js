import React, {Component} from 'react';
import Carousel from './Carousel';
import './LandingPage.css'


class LandingPage extends Component {
    render() {
        return (
            <div>
                <main role="main">

                    <Carousel/>

                    <p className="mission"> Here at Equal Education, our mission is to help people find charitable
                        organizations that support education
                        in their desired region. Equal Education focuses on low income areas and highlights statistics
                        about
                        the surrounding community to raise awareness for these impoverished areas. We make it possible
                        to donate or volunteer with these organizations and make a difference in a child's education.
                    </p>
                    {/* Marketing messaging and featurettes
================================================== */}
                    {/* Wrap the rest of the page in another container to center all the content. */}
                    <div className="container marketing">
                    </div>
                    {/* /.container */}
                    {/* FOOTER */}

                </main>
            </div>
        );
    }
}


export default LandingPage;
