import React, {Component} from 'react';
import './App.css';
import InfoCard from "./InfoCard";
import PaginationContainer from "./paginationComponents/PaginationContainer";

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
                <PaginationContainer/>
            </div>
        )
    }
}

export default (SchoolPage);
