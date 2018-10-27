import React from 'react';
import {PaginationItem, PaginationLink} from 'reactstrap';
import {Link} from "react-router-dom";


export const PagingGenerator = (props) => {
    const path = props.url;
    const pageNumber = props.pageNumber;
    const type = props.type;
    let output = [];
    if (type === 'previous' || type === 'next') {
        output = [];
    }
    else {
        output.push(pageNumber);
    }
    debugger;
    return (
        <PaginationItem>
            <PaginationLink className={type} tag={Link} to={`/${path}/${pageNumber}`}>
                {output}
            </PaginationLink>
        </PaginationItem>
    )
};
