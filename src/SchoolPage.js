import React, {Component} from 'react';
import './App.css';
import InfoCard from "./InfoCard";
import PaginationContainer from "./paginationComponents/PaginationContainer";
import {withRouter} from "react-router-dom";

class SchoolPage extends Component {

    constructor(props) {
        super(props);
    }
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
                <PaginationContainer current={this.props.current} path={this.props.match.url}/>
            </div>
        )
    }
}

export default withRouter(SchoolPage);
