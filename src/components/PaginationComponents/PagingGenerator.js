import React from 'react';
import {PaginationItem, PaginationLink} from 'reactstrap';
import {Link} from "react-router-dom";


const urls = {
    'charity': 'charities',
    'school': 'schools',
    'community': 'communities',
};


export default class PagingGenerator extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            pageNumber: this.props.pageNumber
        }
    }

    render() {
        const path = this.props.path;
        debugger;
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
                <PaginationLink next={next} previous={prev} tag={Link} to={`/${urls[path]}/${pageNumber}`}>
                    {output}
                </PaginationLink>
            </PaginationItem>
        );
    };
}

