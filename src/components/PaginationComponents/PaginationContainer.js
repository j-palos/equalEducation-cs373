import React, {Component} from 'react';
import {Col, Pagination, Row} from 'reactstrap';
import PagingGenerator from './PagingGenerator';
import GridContainer from "../GridContainers/GridContainer";
// import SearchAppBar from "../FilterSortBar/SearchAppBar";
import Select from 'react-select';
import './PaginationContainer.css';
import {filterables, sortables} from '../../constants/apiConstants';
import Button from '@material-ui/core/Button';
import SorterButton from "../FilterSortBar/SorterButton";


const base = 'http://api.equaleducation.info';

const urls = {
    'charity': 'charities',
    'school': 'school_districts',
    'community': 'communities',
};

const searchurl = {
    'search': 'search',
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
            filterOptions: Object.keys(filterables[this.props.path] || []),
            sortOptions: Object.keys(sortables[this.props.path] || []),
            activeFilters: [],
            activeSort: this.props.activeSort || null,
            desc: false,
        }
    }

    componentDidMount() {
        this.getData();
    }

    // componentWillUnmount(){
    //     sessionStorage.clear();
    // }

    getActiveFilters() {
        let filters = '';
        let activeFilters = this.state.activeFilters;
        for (let x in activeFilters) {
            // let string  = [activeFilters[x]].value.replace(' ', '+');
            filters += `&${x}=${activeFilters[x].value}`;
        }
        // filters = encodeURI(filters);
        // debugger;
        return filters.toLowerCase();
    }

    getActiveSort() {
        let sort = '';
        let activeSort = this.state.activeSort;
        if (activeSort) {
            sort += `&sort=${activeSort}`;
            if (this.state.desc) {
                sort += '&desc=true'
            }
        }
        // debugger;
        return sort.toLowerCase();
    }

    getAPIURL(currentPage) {
        let url = `${base}/${urls[this.props.path]}?page=${currentPage}`;
        if (searchurl[this.state.path]) {
            return url;
        }
        let end = this.getActiveFilters();
        end += this.getActiveSort();
        // debugger;
        // +encodeURIComponent(end)
        return url + end;
    }


    getData() {
        let currentPage = this.state.currentPage;
        let url = this.getAPIURL(currentPage);
        debugger;
        if (sessionStorage.getItem(`${url}`)) {
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
                    let pagination = this.helperPaging(this.state.currentPage, totalPages);
                    this.setState({
                        total: totalPages,
                        info: info,
                        pagination: pagination,
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
        let pagination = this.helperPaging(currentPage, totalPages);
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
            let url = this.getAPIURL(currentPage);
            pagination.push(<PagingGenerator pageNumber={currentPage - 1} type={'previous'} path={this.props.path}
                                             key={'prev'} url={url}
            />);
        }
        for (i; i <= rightBoundary; i++) {
            let url = this.getAPIURL(i);
            pagination.push(<PagingGenerator pageNumber={i} path={this.props.path} currentPage={currentPage} key={i}
                                             url={url}
            />)
        }
        if (lastPage > currentPage) {
            let url = this.getAPIURL(lastPage);
            pagination.push(<PagingGenerator pageNumber={currentPage + 1} type={'next'} path={this.props.path}
                                             key={'next'} url={url}
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

    handleFilterChange(filterable, selections) {
        let selection = this.state.activeFilters || [];
        selection[`${filterable}`] = selections;
        this.setState({
            activeFilters: selection,
        });
    }


    handleSortChange(selectedOption) {
        if (selectedOption) {
            this.setState({
                activeSort: selectedOption['value'],
            });
        } else {
            this.setState({activeSort: null})
        }
    }

    handleSubmit = () => {
        // sessionStorage.clear();
        this.getData();
        // debugger;
    };

    handleDirectionChange(e) {
        let change = !this.state.desc;
        this.setState({
            desc: change
        });
        this.getData();
    }

    render() {
        let filtersRender, sortRender, sortButton = [];
        if (this.state.path !== 'search') {
            filtersRender = this.state.filterOptions.map(filterable =>
                <Col key={filterable} sm={4} className={'mx-auto'}>
                    <Select className={"Filter"}
                            name={filterable}
                            value={this.state.activeFilters.filterable}
                            onChange={this.handleFilterChange.bind(this, filterable)}
                            options={filterables[this.props.path][filterable]}
                            isMulti={false}
                            placeholder={"Filter by " + filterable + "..."}>
                    </Select>
                </Col>
            );
            sortRender =
                [<Select className={"Sort"}
                         key={'Sort'}
                         name='Sort'
                         value={sortables[this.props.path][this.state.activeSort]}
                         onChange={this.handleSortChange.bind(this)}
                         options={sortables[this.props.path]}
                         placeholder={"Sort by ..."}>
                </Select>]
            ;
            sortButton = [<SorterButton key={'sorter'} desc={this.state.desc}
                                        onClick={this.handleDirectionChange.bind(this)}/>]
        }
        return (
            <div>
                {this.state.path !== 'search' &&
                (<div>
                        <Row>
                            {filtersRender}
                        </Row>
                        <Row>
                            <Col>
                                <div className={"Menu"}>
                                    {sortRender}</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Button variant="contained" color="inherit" onClick={(e) => this.handleSubmit(e)}
                                    className={'mx-auto'} style={{margin: '5px'}}>
                                Apply Filters/Sort
                            </Button><Col>
                            <span style={{margin: 'auto'}}>
                                {sortButton}</span>
                            </Col>
                        </Row>
                    </div>
                )}
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

