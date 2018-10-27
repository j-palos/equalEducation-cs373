import React, {Component} from 'react';
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
