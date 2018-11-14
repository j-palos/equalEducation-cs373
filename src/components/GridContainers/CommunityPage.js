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
        let x = this.props.location.search;
        debugger;
        let egg = queryString.parse(x);
        let meta = {};
        let activeFilters = [];
        let activeSort = egg.sort;
        let desc = egg.desc;
        let xx = communityFilterQuery;
        for (x in (egg)) {
            // debugger;
            for (let y in xx) {
                if (xx[y] === x) {
                    if (x === 'Name') {
                        activeFilters[x] = {value: 'Community', label: egg[x]};
                    }
                    else {
                        activeFilters[x] = {value: egg[x], label: egg[x]};
                    }
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
