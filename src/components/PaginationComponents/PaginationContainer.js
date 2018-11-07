import React, {PureComponent} from 'react';
import {withRouter} from 'react-router-dom';
import {Pagination, Row} from 'reactstrap';
import PagingGenerator from './PagingGenerator';
import GridContainer from "../GridContainers/GridContainer";


const base = 'http://api.equaleducation.info';

const urls = {
    'charity': 'charities',
    'school': 'school_districts',
    'community': 'communities',
};

const PER_PAGE = 18;

class PaginationContainer extends PureComponent {

    //passed in a prop for total number of thing
    constructor(props) {
        super(props);
        let curPage = parseInt(this.props.page);
        this.state = {
            info: [],
            currentPage: curPage,
            path: this.props.path,
            pagination: [],
        }
    }

    componentDidMount() {
        this.getData()
    }


    getData() {
        let currentPage = this.state.currentPage;
        let url = `${base}/${urls[this.props.path]}/?page=${currentPage}`;
        debugger;
        fetch(url)
            .then(results => {
                return results.json();
            })
            .then(data => {
                let totalPages = data['num_pages'];
                let info = data['grid'];
                // debugger;
                let pagination = this.helperPaging(this.state.currentPage, totalPages);
                debugger;
                this.setState({
                    total: totalPages,
                    info: info,
                    pagination: pagination,
                });
                return totalPages;
            })
    }

    helperPaging(curPage, total) {
        let pagination = [];
        let currentPage = curPage;

        debugger;
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

    componentWillReceiveProps(props) {
        debugger;
        this.props = props;
        debugger;
        let curPage = parseInt(this.props.page);
        this.setState({
                currentPage: curPage,
                pagination: []
            },
            function () {
                this.getData();
            }
        )
    }

    render() {
        debugger;
        return (
            <div>
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

export default withRouter(PaginationContainer);

