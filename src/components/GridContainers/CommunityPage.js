import React, {Component} from 'react';
import {Container} from "reactstrap";
import PaginationContainer from "../PaginationComponents/PaginationContainer";

class CommunityPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: this.props.match.params.page || 1
        }
    }

    componentWillReceiveProps(props) {
        this.props = props;
        this.setState({'page': props.match.params.page});
    }

    render() {
        return (
            <Container>
                <main role="main">
                    <div className="container marketing my-5">
                        <br/><br/>
                        <div className={'mx-auto'}>
                            <PaginationContainer
                                path={'community'}
                                page={this.state.page}/>
                        </div>
                    </div>
                </main>
            </Container>
        )
    }
}

export default CommunityPage;
