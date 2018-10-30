import React from 'react';
import {PaginationItem, PaginationLink} from 'reactstrap';
import {Link} from "react-router-dom";


export default class PagingGenerator extends React.PureComponent {


    render() {
        const path = this.props.path;
        const pageNumber = this.props.pageNumber;
        const type = this.props.type;
        let output = [];
        let prev, next = false;
        let active = this.props.currentPage === pageNumber;
        if (type === 'previous') {
            prev = true;
        }
        else if (type === 'next') {
            next = true;
        }
        else {
            output.push(pageNumber);
        }
        return (
            <PaginationItem active={active}>
                <PaginationLink next={next} previous={prev} tag={Link} to={`/${path}/${pageNumber}`}>
                    {output}
                </PaginationLink>
            </PaginationItem>
        );
    };
}

