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
            info: []
        };
        this.helperGrid = this.helperGrid.bind(this);
    }

    componentDidMount() {
        let currentPage = Number(this.props.match.params['id']);
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
                    info: info
                })
            })
    }




    helperPaging() {
        let children = [];
        let currentPage = Number(this.props.match.params['id']);
        // debugger;
        if (isNaN(currentPage)) {
            currentPage = 1;
        }
        // debugger;
        let i;
        let lastPage = Number(this.state.total);
        i = Number(Math.max(currentPage - 3, 1));
        let prev = Number(Math.max(currentPage - 1, 1));
        let rightBoundary = Number(Math.min(currentPage + 3, lastPage));
        children.push(<PagingGenerator pageNumber={prev} type={'previous'} path={this.props.path} key={'prev'}/>);
        for (i; i <= rightBoundary; i++) {
            children.push(<PagingGenerator pageNumber={i} path={this.props.path} currentPage={currentPage} key={i}/>)
        }
        let next = Number(Math.min(currentPage + 1, lastPage));
        children.push(<PagingGenerator pageNumber={next} type={'next'} path={this.props.path} key={'next'}/>);
        return children;
    }

    helperGrid() {
        let currentPage = Number(this.props.match.params['id']);
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
                    info: info
                })
            })
    }

    render() {
        let paging = this.helperPaging();

        return (
            <div>
                <GridContainer info={this.state.info} path={this.props.path}
                               page={this.props.match.params['id]'] ? this.props.match.params['id]'] : 1}/>

                <Row>
                    <Pagination size="lg" aria-label="Page navigation" className={'mx-auto'} onClick={this.helperGrid}>
                        {paging}
                    </Pagination>
                </Row>
            </div>
        )
    }
}

export default withRouter(PaginationContainer);

