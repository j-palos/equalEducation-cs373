import React, {Component} from 'react';
import './App.css';
import PaginationContainer from "./paginationComponents/PaginationContainer";
import {withRouter} from "react-router-dom";
import {Container} from "reactstrap";

class SchoolPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <main role="main">
                    <div className="container marketing my-5">
                        <br/><br/>
                        <div className={'mx-auto'}>
                            <PaginationContainer path={'school'}/></div>
                    </div>
                </main>
            </Container>
        )
    }
}

export default withRouter(SchoolPage);
