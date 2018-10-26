import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

class PaginationContainer extends Component {

    //passed in a prop for total number of things

    constructor(props) {
        super(props);
        this.state = {
            pageNumber: props.current,
        }
    }


    render() {
        return (
            <Pagination size="lg" aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink previous tag={Link} to={'/school'}/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink tag={Link} to={`${this.props.match.url}/1`}>
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#"/>
                </PaginationItem>
            </Pagination>
        )
    }
}

export default withRouter(PaginationContainer);

