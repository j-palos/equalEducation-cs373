import React, {Component} from 'react';
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
class PaginationContainer extends Component {

    //passed in a prop for total number of things

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            perPage: PER_PAGE,
            info: [],
            currentPage: this.props.match.params['id'],
        };
        // this.helperGrid = this.helperGrid.bind(this);
    }

    componentDidMount() {
        let currentPage = Number(this.state.currentPage);
        // debugger;
        if (isNaN(currentPage)) {
            currentPage = 1;
        }
        let url = `${base}/${urls[this.props.path]}/?page=${currentPage}`;
        fetch(url)
            .then(results => {
                return results.json();
            })
            .then(data => {
                let totalPages = data['num_pages'];
                let info = data['grid'];
                // debugger;
                this.setState({
                    total: totalPages,
                    info: info,
                    currentPage: currentPage,
                })
            })
    }




    helperPaging() {
        let children = [];
        let currentPage = Number(this.state.currentPage);

        debugger;
        if (isNaN(currentPage)) {
            currentPage = 1;
        }
        // debugger;
        let i;
        let lastPage = Number(this.state.total);
        i = Number(Math.max(currentPage - 3, 1));

        let rightBoundary = Number(Math.min(currentPage + 3, lastPage));
        if (currentPage > 1) {
            children.push(<PagingGenerator pageNumber={currentPage - 1} type={'previous'} path={this.props.path}
                                           key={'prev'}
                                           data={this.update.bind(this)}/>);
        }
        for (i; i <= rightBoundary; i++) {
            children.push(<PagingGenerator pageNumber={i} path={this.props.path} currentPage={currentPage} key={i}
                                           data={this.update.bind(this)}/>)
        }
        if (lastPage > currentPage) {
            children.push(<PagingGenerator pageNumber={currentPage + 1} type={'next'} path={this.props.path}
                                           key={'next'}
                                           data={this.update.bind(this)}/>);
        }
        return children;
    }

    update(page) {
        return () => {
            let currentPage = Number(page);
            debugger;
            if (isNaN(currentPage)) {
                currentPage = 1;
            }
            let url = `${base}/${urls[this.props.path]}/?page=${currentPage}`;
            fetch(url)
                .then(results => {
                    return results.json();
                })
                .then(data => {
                    let totalPages = data['num_pages'];
                    let info = data['grid'];
                    // debugger;
                    this.setState({
                        total: totalPages,
                        info: info,
                        currentPage: currentPage
                    })
                })
        };
    }

    render() {
        let paging = this.helperPaging();

        return (
            <div>
                <GridContainer info={this.state.info} path={this.props.path}
                               page={this.props.match.params['id]'] ? this.props.match.params['id]'] : 1}/>

                <Row>
                    <Pagination size="lg" aria-label="Page navigation" className={'mx-auto'}>
                        {paging}
                    </Pagination>
                </Row>
            </div>
        )
    }
}

export default withRouter(PaginationContainer);

