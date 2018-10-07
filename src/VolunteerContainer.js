import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import oaklandFund from './images/static/oaklandfund.jpg';
import oakland from './images/static/oakland.jpg';
import volunteer from './images/volunteers-placeholder.jpg';
import Link from "react-router-dom/es/Link";
import khamb from "./images/static/khambrelfoundationfooterlogo.jpg";
import texas from "./images/static/texascity.jpg";


class VolunteerContainer extends Component {


    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <Header/>
                <main role="main">




                    {/* /.container */}
                    {/* FOOTER */}
                    <Footer/>
                </main>
            </div>
        );
    }
}

export default VolunteerContainer;
