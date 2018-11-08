import React, {PureComponent} from 'react';
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

class PaginationContainer extends PureComponent {

    //passed in a prop for total number of thing
    constructor(props) {
        super(props);
        let curPage = parseInt(this.props.page);
        this.state = {
            info: [],
            currentPage: curPage,
            path: this.props.path,
            pagination: [],
            cached: false,
        }
    }

    componentDidMount() {
        this.getData();
    }
    getData() {
        let currentPage = this.state.currentPage;
        if(sessionStorage.getItem(`${this.state.path}${currentPage}`)){
            // debugger;
            this.getDataFromCache(`${this.state.path}${currentPage}`);
            
        }
        else{
        let url = `${base}/${urls[this.props.path]}/?page=${currentPage}`;
        fetch(url)
            .then(results => {
                return results.json();
            })
            .then(data => {
                let totalPages = data['num_pages'];
                let info = data['grid'];
                sessionStorage.setItem(`${this.state.path}${currentPage}`, JSON.stringify(data));

                let pagination = this.helperPaging(this.state.currentPage, totalPages);
                this.setState({
                    total: totalPages,
                    info: info,
                    pagination: pagination,
                });
                return totalPages;
            })
            .then((totalPages )=> {
                if(this.state.cached === true){
                    return;
                }
                let i = 1;
        let rightBoundary = totalPages;
        debugger;
        for(i; i < rightBoundary; i++){
            let url = `${base}/${urls[this.props.path]}/?page=${i}`;
            fetch(url)
                .then(results => {
                    return results.json();
                })
                .then(data => {
                    sessionStorage.setItem(`${this.state.path}${i}`, JSON.stringify(data));
                })
        }
        this.setState({
            cached: true
        });
            })
        }
    }

    getDataFromCache(currentPage){
            let data = sessionStorage.getItem(currentPage);
            // debugger;
            data = JSON.parse(data);
            // debugger;
            let totalPages = data['num_pages'];
            let info = data['grid'];
            let pagination = this.helperPaging(this.state.currentPage, totalPages);
            this.setState({
                total: totalPages,
                info: info,
                pagination: pagination,
            });
    }


    helperPaging(curPage, total) {
        let pagination = [];
        let currentPage = curPage;
        let i;
        let lastPage = Number(total);
        i = Number(Math.max(currentPage - 3, 1));
        let rightBoundary = Number(Math.min(currentPage + 3, lastPage));
        if (currentPage > 1) {
            pagination.push(<PagingGenerator pageNumber={currentPage - 1} type={'previous'} path={this.props.path}
                                             key={'prev'}
            />);
        }
        for (i; i <= rightBoundary; i++) {
            pagination.push(<PagingGenerator pageNumber={i} path={this.props.path} currentPage={currentPage} key={i}
            />)
        }
        if (lastPage > currentPage) {
            pagination.push(<PagingGenerator pageNumber={currentPage + 1} type={'next'} path={this.props.path}
                                             key={'next'}
            />);
        }
        return pagination;
    }

    componentWillReceiveProps(props) {
        this.props = props;
        let curPage = parseInt(this.props.page);
        this.setState({
                currentPage: curPage,
                pagination: []
            },
            function () {
                this.getData();
            }
        )
    }

    render() {
        return (
            <div>
                <GridContainer info={this.state.info} path={this.props.path}/>
                <Row>
                    <Pagination size="lg" aria-label="Page navigation" className={'mx-auto'}>
                        {this.state.pagination}
                    </Pagination>
                </Row>
            </div>
        )
    }
}

export default withRouter(PaginationContainer);

