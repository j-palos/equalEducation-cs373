import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Link from "react-router-dom/es/Link";
import prathusa from "./images/static/prathamUSA.jpg";
import houston from "./images/static/HoustonISD.png";

class VolunteerPage3 extends Component {


    render() {
        return (
            <div>
                <Header/>
                <main role="main">

                    <div className="container my-5">
                        <h1 className="display-4 text-center">Schools and Organizations</h1>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-stretch">
                                <div className="card" style={{width: '18rem'}}>
                                    <img className="card-img-top" src={houston} alt="Texas City ISD"/>
                                    <div className="card-body text-center d-flex flex-column">
                                        <h5 className="card-title">Houston Independent School District</h5>
                                        <ul className="list-unstyled mt-auto">
                                            <li className="card-text text-left">
                                                The Houston Independent School District is the largest school district
                                                in Texas and the seventh-largest in the United States.
                                            </li>
                                        </ul>
                                        <Link to="/school/3" className="mt-auto btn btn-primary">More Details</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch">
                                <div className="card" style={{width: '18rem'}}>
                                    <img className="card-img-top" src={prathusa} alt="pratham"/>
                                    <div className="card-body text-center d-flex flex-column">
                                        <h5 className="card-title">Pratham USA</h5>
                                        <ul className="list-unstyled mt-auto">
                                            <li className="card-text text-left">
                                                Pratham USA is a volunteer-driven organization with 16 chapters across
                                                the United States
                                                that raise awareness and mobilize financial resources for our work on
                                                the ground.
                                            </li>
                                        </ul>
                                        <Link to="/charity/3" className="mt-auto btn btn-primary">View Org</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* /.container */}
                    {/* FOOTER */}
                    <Footer/>
                </main>
            </div>
        );
    }
}

export default VolunteerPage3;
