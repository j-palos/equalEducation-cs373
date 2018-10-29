import React, {Component} from 'react';
import './App.css';
import InfoCard from "./InfoCard";
import PaginationContainer from "./paginationComponents/PaginationContainer";
import {withRouter} from "react-router-dom";
import {Container, Row} from "reactstrap";

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
                        <InfoCard/>
                        <Row>
                            <div className={'mx-auto'}>
                                <PaginationContainer path={'schools'}/></div>
                        </Row>
                    </div>
                </main>
            </Container>
        )
    }
}

export default withRouter(SchoolPage);
