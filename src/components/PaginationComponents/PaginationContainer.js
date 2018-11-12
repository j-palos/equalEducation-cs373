import React, {Component} from 'react';
import {Pagination, Row} from 'reactstrap';
import PagingGenerator from './PagingGenerator';
import GridContainer from "../GridContainers/GridContainer";
// import SearchAppBar from "../FilterSortBar/SearchAppBar";
import Select from 'react-select';
import {filterables, sortables, reverse_states } from '../../constants/apiConstants';
const base = 'http://api.equaleducation.info';


const urls = {
    'charity': 'charities',
    'school': 'school_districts',
    'community': 'communities',
};


class PaginationContainer extends Component {

    //passed in a prop for total number of thing
    constructor(props) {
        super(props);
        let curPage = parseInt(this.props.page);
        this.state = {
            info: [],
            currentPage: curPage,
            path: this.props.path,
            pagination: [],
            cached: false,
            total: 0,
            filters: Object.keys(filterables[this.props.path]),
            sorts: Object.keys(sortables[this.props.path]),
            activeFilters : [],
            activeSort: {},
            desc : false,
        }

    }

    componentDidMount() {
        this.getData();
    }

    componentWillUnmount(){
        sessionStorage.clear();
    }

    getData() {
        let currentPage = this.state.currentPage;
        // debugger;

        if (sessionStorage.getItem(`${currentPage}`)) {
            // debugger;
            this.getDataFromCache(`${currentPage}`);
        }
        else {
            // debugger;
            let url = `${base}/${urls[this.props.path]}/?page=${currentPage}`;
            // debugger;
            fetch(url)
                .then(results => {
                    return results.json();
                })
                .then(data => {
                    let totalPages = data['num_pages'];
                    let info = data['grid'];
                    sessionStorage.setItem(`${currentPage}`, JSON.stringify(data));

                    let pagination = this.helperPaging(this.state.currentPage, totalPages);
                    this.setState({
                        total: totalPages,
                        info: info,
                        pagination: pagination,
                    });
                    return totalPages;
                })
        }
    }

    getDataFromCache(currentPage) {
        let data = sessionStorage.getItem(currentPage);

        data = JSON.parse(data);

        let totalPages = data['num_pages'];
        let info = data['grid'];
        let pagination = this.helperPaging(this.state.currentPage, totalPages);
        this.setState({
            total: totalPages,
            info: info,
            pagination: pagination,
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
            pagination.push(<PagingGenerator pageNumber={currentPage - 1} type={'previous'} path={this.props.path}
                                             key={'prev'}
            />);
        }
        for (i; i <= rightBoundary; i++) {
            pagination.push(<PagingGenerator pageNumber={i} path={this.props.path} currentPage={currentPage} key={i}
            />)
        }
        if (lastPage > currentPage) {
            pagination.push(<PagingGenerator pageNumber={currentPage + 1} type={'next'} path={this.props.path}
                                             key={'next'}
            />);
        }
        return pagination;
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let curPage = parseInt(nextProps.page);
        this.setState({
                currentPage: curPage,
                pagination: []
            },
            function () {
                this.getData();
            }
        )
    }

    // updateStates = (change) => {
    //     this.setState({
    //         [states]: change
    //     })
    // };


    handleFilterChange(filterable, selections) {
        const RESET_PAGE = 1;
        let selection  = this.state.activeFilters[filterable] || [];
        selection.push(selections);
        this.setState({
            activeFilters : {[filterable]: selection},
            page: RESET_PAGE
        }, function() {this.getData()});
    }


    render() {


        // let filters = Object.keys(this.props.filterables).map(selection => this.props.filterables[selection]);
        // debugger;

        let filtersRender = this.state.filters.map(filterable =>

            <Select className={"Filter"}
                    key={filterable}
                    name={filterable}
                    value={this.state.activeFilters.filterable}
                    onChange={this.handleFilterChange.bind(this, filterable)}
                    options={filterables[this.props.path][filterable]}
                    isMulti={false}
                    placeholder={"Filter by " + filterable + "..."}>
            </Select>
        );
        // debugger;
        return (
            <div>
                    {filtersRender}
                <GridContainer info={this.state.info} path={this.props.path}/>
                <Row>
                    <Pagination size="lg" aria-label="Page navigation" className={'mx-auto'}>
                        {this.state.pagination}
                    </Pagination>
                </Row>
            </div>
        )
    }
}

export default (PaginationContainer);

