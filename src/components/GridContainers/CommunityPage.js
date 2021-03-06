import React, {PureComponent} from 'react';
import {Container} from "reactstrap";
import PaginationContainer from "../PaginationComponents/PaginationContainer";
import queryString from "query-string";
import {communityFilterQuery} from "../../constants/apiConstants";
import './ModelPages.css'

class CommunityPage extends PureComponent {
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
                        <h1 class="h1-models">Communities</h1>
                        <br/><br/>
                        <div className={'mx-auto'}>
                            <PaginationContainer
                                path={'community'}
                                page={this.props.match.params.page || 1}
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
