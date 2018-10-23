import React, {Component} from 'react';
import './App.css';
import InfoCard from "./InfoCard";

class SchoolPage extends Component {
    render() {
        return (
            <div>
                <main role="main">
                    <div className="container marketing my-5">
                        <br/><br/>
                        <InfoCard/>
                        <hr className="featurette-divider"/>
                    </div>
                </main>
            </div>
        )
    }
}

export default SchoolPage;
