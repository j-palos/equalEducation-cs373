import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Pagination, Row} from 'reactstrap';
import PagingGenerator from './PagingGenerator';
import GridContainer from "../GridContainers/GridContainer";
// import SearchAppBar from "../FilterSortBar/SearchAppBar";
import Select from 'react-select';
import './PaginationContainer.css';
import {filterables, sortables} from '../../constants/apiConstants';
// import Button from '@material-ui/core/Button';
import SorterButton from "../FilterSortBar/SorterButton";
import {withRouter} from "react-router-dom";


const base = 'http://api.equaleducation.info';

const urls = {
    'charity': 'charities',
    'school': 'school_districts',
    'community': 'communities',
};

const surls = {
    'charity': 'charities',
    'school': 'schools',
    'community': 'communities',
};

class PaginationContainer extends Component {
    constructor(props) {
        super(props);
        let curPage = parseInt(this.props.page);
        this.state = {
            info: [],
            currentPage: curPage,
            path: this.props.path,
            pagination: [],
            total: 0,
            filterOptions: Object.keys(filterables[this.props.path] || []),
            sortOptions: Object.keys(sortables[this.props.path] || []),
            activeFilters: this.props.activeFilters || [],
            activeSort: this.props.activeSort || null,
            desc: this.props.desc || false,
        }

    }

    componentDidMount() {
        this.getData();
    }

    getActiveFilters() {
        let filters = '';
        let activeFilters = this.state.activeFilters;
        for (let key in activeFilters) {
            let value = (activeFilters[key]).value;
            value = value.replace(/ /g, "+");
            filters += `&${key}=${value}`;
        }
        return filters;
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
        return sort;
    }

    getAPIURL(currentPage) {
        let url = `${base}/${urls[this.props.path]}?page=${currentPage}`;
        let end;
        if (this.state.activeFilters) {
            end = this.getActiveFilters();
        }
        if (this.state.activeSort) {
            end += this.getActiveSort();
        }
        return url + end + '&list=6';
    }

    getData() {
        let currentPage = parseInt(this.props.page);
        let url = this.getAPIURL(currentPage).toLowerCase();
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
        let currentPage = parseInt(curPage);
        let i;
        let lastPage = Number(total);
        i = Number(Math.max(currentPage - 3, 1));
        let temp = currentPage + 3;
        let rightBoundary = Number(Math.min(temp, lastPage));
        let query = this.props.query || `?${this.getActiveFilters() + this.getActiveSort()}`;
        if (currentPage > 1) {
            let url = this.getAPIURL(currentPage);
            pagination.push(<PagingGenerator pageNumber={currentPage - 1} type={'previous'} path={this.props.path}
                                             key={'prev'} url={url} query={query}
            />);
        }
        for (i; i <= rightBoundary; i++) {
            let url = this.getAPIURL(i);
            pagination.push(<PagingGenerator pageNumber={i} path={this.props.path} currentPage={currentPage} key={i}
                                             url={url} query={query}
            />)
        }
        if (lastPage > currentPage) {
            let url = this.getAPIURL(lastPage);
            pagination.push(<PagingGenerator pageNumber={currentPage + 1} type={'next'} path={this.props.path}
                                             key={'next'} url={url} query={query}
            />);
        }
        return pagination;
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let curPage = parseInt(nextProps.page);
        this.setState({
                currentPage: curPage,
                pagination: [],
                activeFilters: nextProps.activeFilters || [],
                activeSort: nextProps.activeSort || null,
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
        console.log(selectedOption);
        console.log(selectedOption.label);
        if (selectedOption) {
            this.setState({
                activeSort: selectedOption['value'],
            });
        } else {
            this.setState({activeSort: null})
        }
    }

    handleSubmit = () => {
        let end = `${this.getActiveFilters() + this.getActiveSort()}`;
        this.setState({
            currentPage: 1,
        });
        return (this.props.history.replace(`/${surls[this.state.path]}/1?${end}`));
    };

    handleReset = () => {
        return (this.props.history.replace(`/${surls[this.state.path]}/1`));
    }

    handleDirectionChange() {
        let change = !this.state.desc;
        this.setState({
            // currentPage: 1,
            desc: change,
        })

    }

    render() {
        let filtersRender, sortRender, sortButton;
        filtersRender = this.state.filterOptions.map(filterable =>
            <Col key={filterable} sm={4} className={'mx-auto'}>
                <Select className={"Filter"}
                        name={filterable}
                        value={this.state.activeFilters[filterable] || null}
                        onChange={this.handleFilterChange.bind(this, filterable)}
                        options={filterables[this.props.path][filterable]}
                        placeholder={`${this.state.activeFilters[filterable] || "Filter by " + filterable + "..."}`}>
                </Select>
            </Col>
        );
        sortRender =
            [<Select className={"Sort"}
                     key={'Sort'}
                     name='Sort'
                     value={sortables[this.props.path][this.state.activeSort] || null}
                     onChange={this.handleSortChange.bind(this)}
                     options={sortables[this.props.path]}
                     placeholder={`${this.state.activeSort || "Sort by ..."}`}>
            </Select>]
        ;
        sortButton = [<SorterButton key={'sorter'} desc={this.state.desc}
                                    onClick={this.handleDirectionChange.bind(this)}/>];
        let resetButton = [<Button color={'warning'} onClick={this.handleReset.bind(this)}>Reset</Button>];

        return (
            <div>
                <div>
                    <Row>
                        {filtersRender}
                    </Row>
                    <Form inline>
                        <FormGroup>
                            <div className={"Menu"}>
                                {sortRender}</div>
                        </FormGroup>

                        <FormGroup>
                        <Button variant="contained" color="inherit" onClick={(e) => this.handleSubmit(e)}
                                className={'mx-auto'} style={{margin: '5px'}}>
                            Apply Filters/Sort
                        </Button></FormGroup>
                        <FormGroup>
                            <span style={{margin: 'auto'}}>
                                {sortButton}</span>
                        </FormGroup>
                        <Col>
                            <FormGroup>
                                <span style={{marginRight: '1px', marginLeft: 'auto'}}> {resetButton}</span>
                            </FormGroup>
                        </Col>
                    </Form>
                </div>
                <GridContainer info={this.state.info}/>
                <Row>
                    <Pagination size="lg" aria-label="Page navigation" className={'mx-auto'}>
                        {this.state.pagination}
                    </Pagination>
                </Row>
            </div>
        )
    }
}

export default withRouter(PaginationContainer);

