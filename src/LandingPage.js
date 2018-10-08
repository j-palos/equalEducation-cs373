import React, {Component} from 'react';
import Header from "./Header";
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import Link from "react-router-dom/es/Link";

class LandingPage extends Component {


    render() {
        return (
            <div>
                <Header/>
                <main role="main">

                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to={0} className="active"/>
                            <li data-target="#myCarousel" data-slide-to={1}/>
                            <li data-target="#myCarousel" data-slide-to={2}/>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="first-slide"
                                     src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                     alt="First slide"/>
                                <div className="container">
                                    <div className="carousel-caption text-left">
                                        <h1>School Districts</h1>
                                        <p><Link to={"/school"} className="btn btn-lg btn-primary" role="button">Learn
                                            More</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="second-slide"
                                     src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                     alt="Second slide"/>
                                <div className="container">
                                    <div className="carousel-caption">
                                        <h1>Volunteer Events</h1>
                                        <p><Link className="btn btn-lg btn-primary" to="/volunteer" role="button">Learn
                                            More</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="third-slide"
                                     src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                     alt="Third slide"/>
                                <div className="container">
                                    <div className="carousel-caption text-right">
                                        <h1>Charity Organizations</h1>
                                        <p><Link className="btn btn-lg btn-primary" to="/charity" role="button">Learn
                                            More</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                    {/* Marketing messaging and featurettes
================================================== */}
                    {/* Wrap the rest of the page in another container to center all the content. */}
                    <div className="container marketing">
                    </div>
                    {/* /.container */}
                    {/* FOOTER */}
                    <Footer/>
                </main>
            </div>
        );
    }
}

export default LandingPage;
