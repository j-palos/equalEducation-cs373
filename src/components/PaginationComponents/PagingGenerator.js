import React from 'react';
import {PaginationItem, PaginationLink} from 'reactstrap';
import {Link} from "react-router-dom";


// const base = 'http://api.equaleducation.info';

const urls = {
    'charity': 'charities',
    'school': 'schools',
    'community': 'communities',
    'search': 'search',
};

// const apiurls = {
//     'charity': 'charities',
//     'school': 'school_districts',
//     'community': 'communities',
// };


export default class PagingGenerator extends React.PureComponent {



    componentDidMount() {

        let url = this.props.url.toLowerCase();
        // debugger;
        if (sessionStorage.getItem(url)) {
            return
        }
        fetch(url)
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                sessionStorage.setItem(`${url}`, JSON.stringify(data));
            })
            .catch(function (error) {
                console.log(error.message);
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
                <PaginationLink next={next} previous={prev} tag={Link}
                                to={`/${urls[path]}/${pageNumber}${this.props.query}`}>
                    {output}
                </PaginationLink>
            </PaginationItem>
        );
    };
}

