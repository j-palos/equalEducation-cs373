import React, {PureComponent} from 'react';
import './ModelPages.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "reactstrap";
import PaginationContainer from "../PaginationComponents/PaginationContainer";
import queryString from "query-string";
import {charityFilterQuery} from "../../constants/apiConstants";


class CharityPage extends PureComponent {

    render() {
        let params = queryString.parse(this.props.location.search);
        let activeFilters = [];
        let activeSort = params.sort;
        let desc = params.desc;
        let possibles = charityFilterQuery;
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
                        <h1 class="h1-models">Charities</h1>
                        <br/><br/>
                        <div className={'mx-auto'}>
                            <PaginationContainer
                                path={'charity'}
                                page={this.props.match.params.page || 1} id="charity-page"
                                query={this.props.location.search}
                                desc={desc}
                                activeFilters={activeFilters}
                                activeSort={activeSort}
                            />
                        </div>
                    </div>
                </main>
            </Container>
        )
    }
}

export default CharityPage;
