import React, {Component} from 'react';
import Header from "./Header";
import './styles/carousel.css';
import './styles/bootstrap-4.1.3-dist/css/bootstrap.min.css';
import Footer from './Footer';
import kyleImage from './images/cropped-20180128_162201_15171782536921.jpeg';
import intaeImage from './images/intae.jpg';
import prateekImage from './images/prateek.jpg';
import jesusImage from './images/jesus.jpg';
import andrewImage from './images/andrew.jpeg';
import AboutHelper from './generators/aboutHelper';
import {Container} from 'reactstrap';

// import profile from './profile';

const profile = {
    "Intae": " I’m a senior at UTCS from Daegu, South Korea. I’m interested in machine learning and trading. I hope I could find alpha by utilizing machine learning. Responsibilities: I was responsible for the front-end design and documentation.",
    "Kyle": "I'm a senior at UTCS from La Marque, Texas. I'm interested in game development and hope to have my own game company one day! Responsibilities: I was responsible for the front-end design and documentation.",
    "Prateek": "I’m a Masters student at UTCS. I’m interested in NLP and CV. Responsibilities: I am responsible for the back-end development and API design.",
    "Andrew": "I’m a senior at UTCS from Richmond, Kentucky. I’m interested in cloud computing and GIS mapping. Responsibilities: I am responsible for back-end development and operations.",
    "Jesus": "I'm A senior at UTCS, from around. I'm interested in full stack and cyber security. Responsibilities:I have mostly been responsible for setting up react ",
};

const images = {
    "Intae": intaeImage,
    "Kyle": kyleImage,
    "Prateek": prateekImage,
    "Andrew": andrewImage,
    "Jesus": jesusImage,
};

class AboutPage extends Component {


    constructor() {
        super();
        this.state = {
            done_names: false,
            done_issues: false,
            names: [],
        };
    }

    componentDidMount() {


    }

    render() {
        return (
            <div>
                <Container>
                    <Header/>
                    <main role="main">
                        <div className="container marketing">
                            <hr className="featurette-divider"/>
                            <div className="row featurette">
                                <div className="col">
                                    <h1>About the Site</h1>
                                    <p className="lead">A website to help people find charitable opportunities to assist
                                        underprivileged children with their education. The website would aggregate a
                                        large
                                        number of low income areas and showcase possible volunteer events/charity
                                        organizations within those areas. Users would then be able to donate their time
                                        and/or money to these organizations through our website.</p>
                                </div>
                            </div>
                            <hr className="featurette-divider"/>
                            <div className="row featurette">
                                <div className="col">
                                    <h1>About our Data</h1>
                                    <p className="lead">Charity Navigator, Census Govt, Volunteer match (RESTful
                                        APIs)</p>
                                </div>
                            </div>
                            <hr className="featurette-divider"/>

                            {/* Three columns of text below the carousel */}
                            {/*{this.state.names}*/}
                            <AboutHelper/>

                        </div>
                        {/* FOOTER */}
                        <Footer/>
                    </main>
                </Container>
            </div>)
            ;
    }
}

export default AboutPage;
