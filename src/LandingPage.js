import React, {Component} from 'react';
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Link from "react-router-dom/es/Link";
import './LandingPage.css';
import Carousel from './components/Carousel';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <main role="main">

                    <Carousel/>
                    
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
