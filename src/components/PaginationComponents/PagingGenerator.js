import React from 'react';
import {PaginationItem, PaginationLink} from 'reactstrap';
import {Link} from "react-router-dom";


const base = 'http://api.equaleducation.info';

const urls = {
    'charity': 'charities',
    'school': 'schools',
    'community': 'communities',
};

const apiurls = {
    'charity': 'charities',
    'school': 'school_districts',
    'community': 'communities',
};


export default class PagingGenerator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageNumber: this.props.pageNumber
        }
    }

    componentDidMount() {

        if (sessionStorage.getItem(this.state.pageNumber)) {
            return
        }
        let url = `${base}/${apiurls[this.props.path]}/?page=${this.state.pageNumber}`;

        fetch(url)
            .then(results => {
                return results.json();
            })
            .then(data => {
                sessionStorage.setItem(`${this.state.pageNumber}`, JSON.stringify(data));
            });
        this.setState({
            cached: true
        });
    }

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
                <PaginationLink next={next} previous={prev} tag={Link} to={`/${urls[path]}/${pageNumber}`}>
                    {output}
                </PaginationLink>
            </PaginationItem>
        );
    };
}

