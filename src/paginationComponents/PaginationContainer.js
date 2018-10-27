import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Pagination} from 'reactstrap';
import PagingGenerator from './PagingGenerator';

class PaginationContainer extends Component {

    //passed in a prop for total number of things

    constructor(props) {
        super(props);
        this.state = {
            total: 27,
            perPage: 9,
        }
    }

    helperPaging() {
        let children = [];
        let currentPage = Number(this.props.match.params['id']);
        if (currentPage !== undefined) {
            currentPage = 1;
        }
        let i;
        let lastPage = Number(Math.ceil(this.state.total / this.state.perPage));
        i = Number(Math.max(currentPage - 3, 1));
        let prev = Number(Math.max(currentPage - 1, 1));
        let rightBoundary = Number(Math.min(currentPage + 3, lastPage));
        children.push(<PagingGenerator pageNumber={prev} type={'previous'} url={this.props.match.params['type']}
                                       key={'prev'}/>);
        for (i; i <= rightBoundary; i++) {
            children.push(<PagingGenerator pageNumber={i} url={this.props.match.params['type']}
                                           currentPage={currentPage} key={i}/>)
        }
        let next = Number(Math.min(currentPage + 1, lastPage));
        children.push(<PagingGenerator pageNumber={next} type={'next'} url={this.props.match.params['type']}
                                       key={'next'}/>);
        return children;
    }
    render() {
        let paging = this.helperPaging();
        return (
            <Pagination size="lg" aria-label="Page navigation">
                {paging}
            </Pagination>
        )
    }
}

export default withRouter(PaginationContainer);

