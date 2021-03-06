import React, {PureComponent} from 'react';
import '../../App.css';
import PaginationContainer from "../PaginationComponents/PaginationContainer";
import {Container} from "reactstrap";
import queryString from 'query-string';
import {schoolFilterQuery} from "../../constants/apiConstants";
import './ModelPages.css'

class SchoolPage extends PureComponent {

    render() {
        let params = queryString.parse(this.props.location.search);
        let activeFilters = [];
        let activeSort = params.sort;
        let desc = params.desc;
        let possibles = schoolFilterQuery;
        for (let param in (params)) {
            for (let pos in possibles) {
                if (possibles[pos] === param) {
                    activeFilters[param] = {value: params[param], label: params[param]};
                }
            }
        }
        console.log('re')
        return (
            <Container>
                <main role="main">
                    <div className="container marketing my-5">
                        <br/><br/>
                        <h1 class="h1-models">School Districts</h1>
                        <br/><br/>
                        <div className={'mx-auto'}>
                            <PaginationContainer
                                path={'school'}
                                page={this.props.match.params.page || 1} id="school-page"
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

export default (SchoolPage);
