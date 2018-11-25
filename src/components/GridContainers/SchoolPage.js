import React, {Component} from 'react';
import '../../App.css';
import PaginationContainer from "../PaginationComponents/PaginationContainer";
import {Container} from "reactstrap";
import queryString from 'query-string';
import {schoolFilterQuery} from "../../constants/apiConstants";
import './ModelPages.css'

class SchoolPage extends Component {

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
        let egg = queryString.parse(x);
        let activeFilters = [];
        let activeSort = egg.sort;
        let desc = egg.desc;
        let xx = schoolFilterQuery;
        debugger;
        for (x in (egg)) {
            for (let y in xx) {
                if (xx[y] === x) {
                    activeFilters[x] = {value: egg[x], label: egg[x]};
                }
            }
        }


        debugger;
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
                                page={this.state.page} id="school-page"
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
