import React, {Component} from 'react';
import {Container} from "reactstrap";
import PaginationContainer from "../PaginationComponents/PaginationContainer";
import queryString from "query-string";
import {communityFilterQuery} from "../../constants/apiConstants";

class CommunityPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: this.props.match.params.page || 1
        }
    }

    componentWillReceiveProps(props) {
        this.setState({'page': props.match.params.page || 1});
    }

    render() {
        let params = queryString.parse(this.props.location.search);
        let activeFilters = [];
        let activeSort = params.sort;
        let desc = params.desc;
        let possibles = communityFilterQuery;
        for (let param in (params)) {
            for (let pos in possibles) {
                if (possibles[pos] === param) {
                    activeFilters[param] = {value: params[param], label: params[param]};
                }
            }
        }
        return (
            <Container>
                <main role="main">
                    <div className="container marketing my-5">
                        <br/><br/>
                        <div className={'mx-auto'}>
                            <PaginationContainer
                                path={'community'}
                                page={this.state.page}
                                id="community-page"
                                query={this.props.location.search}
                                desc={desc}
                                activeFilters={activeFilters}
                                activeSort={activeSort}/>
                        </div>
                    </div>
                </main>
            </Container>
        )
    }
}

export default CommunityPage;
