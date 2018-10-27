import React, {Component} from 'react';
// import './App.css';
import prathvol from "./images/static/prathamvolunteer.jpg";
import Link from "react-router-dom/es/Link";
import InfoCard from "./InfoCard";

class VolunteerPage extends Component {


    render() {
        return (
            <div>
                <main role="main">
                    <div className="container marketing my-5">
                        <br/><br/>
                        <InfoCard type="community"/>
                        <hr className="featurette-divider"/>
                    </div>
                </main>
            </div>
        );
    }
}

export default VolunteerPage;
