import React, {Component} from 'react';
import Header from "./Header";
import './styles/carousel.css';
import './styles/bootstrap-4.1.3-dist/css/bootstrap.min.css';
import image from './images/placeholder.jpg';
import Footer from './Footer'

class AboutPage extends Component {

    constructor() {
        super();
        this.state = {
            names: [],
            commit_counts: [],
        };
    }

    componentDidMount() {
        fetch('https://gitlab.com/api/v4/projects/8524331/repository/commits')
        .then(results => {
            return results.json();
        }).then(data => {
            
            var email_dict = {
                "ryooit@utexas.edu": "Intae",
                "ryooit70@gmail.com" : "Intae",
                "ksotengco@gmail.com" : "Kyle",
                "prateek.kolhar@utexas.edu" : "Prateek",
                "jesus.rpalos@gmail.com" : "Jesus",
                "jpjessep@users.noreply.github.com" : "Jesus",
                // Add Andrew
            };
            let output = data.map( (x) => {
                return (email_dict[x.committer_email])
            })
            var counter_dict = {
                "Intae": 0,
                "Kyle": 0,
                "Prateek": 0,
                "Jesus": 0,
                "Andrew": 0,
            };
            var i;
            for(i = 0; i < output.length; i++) {
                
                var value = output[i];
                counter_dict[value] +=1;
                
            }
            
            console.log(counter_dict)
            
            let names = Object.keys(conter_dict).map((name, index) => {
                return(
                    <div>{name}: {counter_dict[name]}</div>
                )
            })
            console.log("asd2");
            this.setState({names: names});
            console.log("state:", this.state.names);
        })
    }

    // person_cell(person){
    //     return(
    //         <div className="col-lg-4">
    //         <img className="rounded-circle" src={image}
    //              alt="Generic placeholder image" width={140} height={140}/>
    //         <h2>{person["name"]}</h2>
    //         <p>Introduce breifly</p>
    //         <ul className="list-group">
    //             <li className="list-group-item">Commits:{person["commits"]}</li>
    //             <li className="list-group-item">Issues:</li>
    //             <li className="list-group-item">Unit tests:</li>
    //         </ul>
    //         </div>
    //     )
    // }
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
                        {this.state.names}
                        <div className="row">
                            <div className="col-lg-4">
                                <img className="rounded-circle" src={image}
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
                                <img className="rounded-circle" src={image}
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
                                <img className="rounded-circle" src={image}
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
                                <img className="rounded-circle" src={image}
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
                                <img className="rounded-circle" src={image}
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
                    <Footer/>
                </main>
            </div>);
    }
}

export default AboutPage;
