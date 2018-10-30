import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Pagination, Row} from 'reactstrap';
import PagingGenerator from './PagingGenerator';
import GridContainer from "../GridContainer";

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
        // debugger;
        if (isNaN(currentPage)) {
            currentPage = 1;
        }
        // debugger;
        let i;
        let lastPage = Number(Math.ceil(this.state.total / this.state.perPage));
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
    render() {
        let paging = this.helperPaging();

        return (
            <div>
                <GridContainer path={this.props.path} page={this.props.match.params['id]'] ? this.props.match.params['id]']: 1} />

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

