import React, {Component} from 'react';
import '../../App.css';
import PaginationContainer from "../PaginationComponents/PaginationContainer";
import {Container} from "reactstrap";

class SchoolPage extends Component {

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
                                path={'school'}
                                page={this.state.page} id="school-page"/>
                        </div>
                    </div>
                </main>
            </Container>
        )
    }
}

export default (SchoolPage);
