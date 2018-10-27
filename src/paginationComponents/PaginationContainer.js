import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Pagination} from 'reactstrap';
import {PagingGenerator} from './PagingGenerator';

class PaginationContainer extends Component {

    //passed in a prop for total number of things

    constructor(props) {
        super(props);
        this.state = {
            pageNumber: this.props.match.params['id'],
            total: 27,
            perPage: 9,
        }
    }

    helperPaging() {
        let children = [];
        let currentPage = Number(this.state.pageNumber);
        let i;
        let lastPage = Number(Math.ceil(this.state.total / this.state.perPage));
        debugger;
        if (currentPage === 1) {
            i = currentPage;
            children.push(<PagingGenerator pageNumber={i} type={'previous'} url={this.props.match.params['type']}
                                           key={'prev'}/>);
        }
        else {
            i = currentPage - 1;
        }

        for (i; i <= lastPage; i++) {
            children.push(<PagingGenerator pageNumber={i} url={this.props.match.params['type']} type={''} key={i}/>)
        }
        return children;

    }
    render() {
        let paging = this.helperPaging();
        return (
            <Pagination size="lg" aria-label="Page navigation example">
                {paging}
            </Pagination>
        )
    }
}

export default withRouter(PaginationContainer);

