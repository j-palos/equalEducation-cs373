import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "reactstrap";
import PaginationContainer from "../PaginationComponents/PaginationContainer";


class CharityPage extends Component {


    render() {
        return (
            <Container>
                <main role="main">
                    <div className="container marketing my-5">
                        <br/><br/>
                        <div className={'mx-auto'}>
                            <PaginationContainer path={'charity'}/></div>
                    </div>
                </main>
            </Container>
        )
    }
}

export default CharityPage;
