import React, {Component} from 'react';
import {Container} from "reactstrap";
import PaginationContainer from "../PaginationComponents/PaginationContainer";

class CommunityPage extends Component {

    render() {
        return (
            <Container>
                <main role="main">
                    <div className="container marketing my-5">
                        <br/><br/>
                        <div className={'mx-auto'}>
                            <PaginationContainer path={'community'}/></div>
                    </div>
                </main>
            </Container>
        )
    }
}

export default CommunityPage;
