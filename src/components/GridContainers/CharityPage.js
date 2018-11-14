import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "reactstrap";
import PaginationContainer from "../PaginationComponents/PaginationContainer";


class CharityPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: this.props.match.params.page || 1
        }
    }

    componentWillReceiveProps(props) {
        this.props = props;
        this.setState({'page': props.match.params.page || 1});
    }

    render() {
        return (
            <Container>
                <main role="main">
                    <div className="container marketing my-5">
                        <br/><br/>
                        <div className={'mx-auto'}>
                            <PaginationContainer
                                path={'charity'}
                                page={this.state.page} id="charity-page"/>
                        </div>
                    </div>
                </main>
            </Container>
        )
    }
}

export default CharityPage;
