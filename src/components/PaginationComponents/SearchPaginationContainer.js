import React, {Component} from 'react';
import {Row} from 'reactstrap';
import PagingGenerator from './PagingGenerator';
import GridContainer from "../GridContainers/GridContainer";
import './PaginationContainer.css';
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";

const base = 'http://api.equaleducation.info';

const searchurl = {
    'search': 'search',
    0: 'all',
    1: 'school_districts',
    2: 'charities',
    3: 'communities'
};

const mapStateToProps = state => {
    return {searchTerms: state.searchTerms};
};

class SearchPaginationContainerConnect extends Component {

    //passed in a prop for total number of thing

    constructor(props) {
        super(props);
        let curPage = parseInt(this.props.page);
        this.state = {
            info: [],
            currentPage: curPage,
            path: this.props.path,
            pagination: [],
            total: 0,
            value: this.props.value || 0,
        }

    }

    componentDidMount() {
        this.getData();
    }


    /**
     * Modify this to deal with the fact that our search terms are now an array
     * @param currentPage
     * @returns {string}
     */
    getSearchAPIURL(currentPage) {
        let value = String(this.props.searchTerms).replace(/,/g, "+");
        return `${base}/${searchurl[this.props.value]}?page=${currentPage}&search=${value}&list=999`;
    }

    getData() {
        let currentPage = this.state.currentPage;
        let url = '';
        url = this.getSearchAPIURL(currentPage);
        if (sessionStorage.getItem(`${url}`) && this.props.path !== 'search') {
            this.getDataFromCache(currentPage, `${url}`);
        }
        else {
            fetch(url)
                .then(results => {
                    if (results.ok) {
                        return results.json();
                    }
                    throw new Error('Network response was not ok.');
                })
                .then(data => {
                    let totalPages = data['num_pages'];
                    let info = data['grid'];
                    sessionStorage.setItem(`${url}`, JSON.stringify(data));
                    debugger;
                    this.setState({
                        total: totalPages,
                        info: info,
                        // pagination: pagination,
                    });
                    return totalPages;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    getDataFromCache(currentPage, url) {
        let data = sessionStorage.getItem(url);
        data = JSON.parse(data);
        let totalPages = data['num_pages'];
        let info = data['grid'];
        // let pagination = this.helperPaging(currentPage, totalPages);
        this.setState({
            total: totalPages,
            info: info,
            // pagination: pagination,
        });
    }


    helperPaging(curPage, total) {
        let pagination = [];
        let currentPage = curPage;
        let i;
        let lastPage = Number(total);
        i = Number(Math.max(currentPage - 3, 1));
        let rightBoundary = Number(Math.min(currentPage + 3, lastPage));
        if (currentPage > 1) {
            let url = this.getSearchAPIURL(currentPage);
            pagination.push(<PagingGenerator pageNumber={currentPage - 1} type={'previous'} path={this.props.path}
                                             key={'prev'} url={url} query={this.props.query}
            />);
        }
        for (i; i <= rightBoundary; i++) {
            let url = this.getSearchAPIURL(i);
            pagination.push(<PagingGenerator pageNumber={i} path={this.props.path} currentPage={currentPage} key={i}
                                             url={url} query={this.props.query}
            />)
        }
        if (lastPage > currentPage) {
            let url = this.getSearchAPIURL(lastPage);
            pagination.push(<PagingGenerator pageNumber={currentPage + 1} type={'next'} path={this.props.path}
                                             key={'next'} url={url} query={this.props.query}
            />);
        }
        return pagination;
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.search === nextProps.search && this.props.value === nextProps.value && this.props.page === nextProps.page) {
            return;
        }
        let curPage = parseInt(nextProps.page);
        this.setState({
                currentPage: curPage,
                pagination: [],
            },
            function () {
                this.getData();
            }
        )
    }

    render() {
        return (
            <div>
                <GridContainer info={this.state.info}/>
                <Row>
                    {/*<Pagination size="lg" aria-label="Page navigation" className={'mx-auto'}>*/}
                    {/*{this.state.pagination}*/}
                    {/*</Pagination>*/}
                </Row>
            </div>
        )
    }
}

const SearchPaginationContainer = connect(mapStateToProps, null)(SearchPaginationContainerConnect);
export default withRouter(SearchPaginationContainer);

