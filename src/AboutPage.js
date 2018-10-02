import React, {Component} from 'react';
import Header from "./Header";
import './styles/carousel.css';
import './styles/bootstrap-4.1.3-dist/css/bootstrap.min.css';
class AboutPage extends Component {


    render() {
        return (
            <div>
                <Header/>
                <main role="main">
                    <div className="container marketing">
                        <hr className="featurette-divider"/>
                        <div className="row featurette">
                            <div className="col">
                                <h1>About the Site</h1>
                                <p className="lead">A website to help people find charitable opportunities to assist
                                    underprivileged children with their education. The website would aggregate a large
                                    number of low income areas and showcase possible volunteer events/charity
                                    organizations within those areas. Users would then be able to donate their time
                                    and/or money to these organizations through our website.</p>
                            </div>
                        </div>
                        <hr className="featurette-divider"/>
                        <div className="row featurette">
                            <div className="col">
                                <h1>About our Data</h1>
                                <p className="lead">Charity Navigator, Census Govt, Volunteer match (RESTful APIs)</p>
                            </div>
                        </div>
                        <hr className="featurette-divider"/>
                        {/* Three columns of text below the carousel */}
                        <div className="row">
                            <div className="col-lg-4">
                                <img className="rounded-circle" src="images/placeholder.jpg"
                                     alt="Generic placeholder image" width={140} height={140}/>
                                <h2>Your Name</h2>
                                <p>Introduce breifly</p>
                                <ul className="list-group">
                                    <li className="list-group-item">Commits:</li>
                                    <li className="list-group-item">Issues:</li>
                                    <li className="list-group-item">Unit tests:</li>
                                </ul>
                            </div>
                            {/* /.col-lg-4 */}
                            <div className="col-lg-4">
                                <img className="rounded-circle" src="images/placeholder.jpg"
                                     alt="Generic placeholder image" width={140} height={140}/>
                                <h2>Your Name</h2>
                                <p>Introduce breifly</p>
                                <ul className="list-group">
                                    <li className="list-group-item">Commits:</li>
                                    <li className="list-group-item">Issues:</li>
                                    <li className="list-group-item">Unit tests:</li>
                                </ul>
                            </div>
                            {/* /.col-lg-4 */}
                            <div className="col-lg-4">
                                <img className="rounded-circle" src="images/placeholder.jpg"
                                     alt="Generic placeholder image" width={140} height={140}/>
                                <h2>Your Name</h2>
                                <p>Introduce breifly</p>
                                <ul className="list-group">
                                    <li className="list-group-item">Commits:</li>
                                    <li className="list-group-item">Issues:</li>
                                    <li className="list-group-item">Unit tests:</li>
                                </ul>
                            </div>
                            {/* /.col-lg-4 */}
                            <div className="col-lg-4">
                                <img className="rounded-circle" src="images/placeholder.jpg"
                                     alt="Generic placeholder image" width={140} height={140}/>
                                <h2>Your Name</h2>
                                <p>Introduce breifly</p>
                                <ul className="list-group">
                                    <li className="list-group-item">Commits:</li>
                                    <li className="list-group-item">Issues:</li>
                                    <li className="list-group-item">Unit tests:</li>
                                </ul>
                            </div>
                            {/* /.col-lg-4 */}
                            <div className="col-lg-4">
                                <img className="rounded-circle" src="images/placeholder.jpg"
                                     alt="Generic placeholder image" width={140} height={140}/>
                                <h2>Your Name</h2>
                                <p>Introduce breifly</p>
                                <ul className="list-group">
                                    <li className="list-group-item">Commits:</li>
                                    <li className="list-group-item">Issues:</li>
                                    <li className="list-group-item">Unit tests:</li>
                                </ul>
                            </div>
                            {/* /.col-lg-4 */}
                        </div>
                        {/* /.row */}
                        <hr className="featurette-divider"/>
                        <div className="row featurette justify-content-md-center">
                            <div className="col-lg-4">
                                <h1>Tools Used</h1>
                                <i className="fab fa-gitlab fa-5x"/>
                                <i className="fab fa-slack fa-5x"/>
                                <i className="fab fa-google fa-5x"/>
                            </div>
                        </div>
                        <hr className="featurette-divider"/>
                    </div>
                    {/* FOOTER */}
                    <footer className="container">
                        <p className="float-right"><a href="#">Back to top</a></p>
                        <p>© Equal Education · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
                    </footer>
                </main>
            </div>);
    }
}

export default AboutPage;
