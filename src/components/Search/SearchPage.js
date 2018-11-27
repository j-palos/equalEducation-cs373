import React from 'react';
import {Col, Container, Form, FormGroup, Input, Row} from 'reactstrap';
import SearchPaginationContainer from "../PaginationComponents/SearchPaginationContainer";
import {changeTerms} from "../../js/store/actions";
import connect from "react-redux/es/connect/connect";

const mapDispatchToProps = dispatch => {
    return {
        changeTerms: term => dispatch(changeTerms(term))
    };
};


class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: this.props.match.params.input || '',
            page: this.props.match.params.page || 1,
            submitted: false,
        }
    }

    componentWillReceiveProps(props) {
        this.setState({'page': props.match.params.page || 1});
    }


    handleChange(e) {
        this.setState({
            userInput: e.target.value,
            submitted: true,
        });
        this.props.changeTerms(e.target.value);
        console.log('we handled change');
    }


    handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.clear();
        let value = this.state.userInput;
        value = value.replace(/ /g, "+");
        this.setState({
            search: value,
            submitted: true,
        });
        // this.props.changeTerms(value);
    };

    handleTabChange = (event, value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <Container>
                <main role="main">
                    <div className="container marketing my-5">
                        <br/><br/>
                        <Row>
                            <Col>
                                <Form>
                                    <FormGroup>
                                        <Input type="search" name="search" id="search" placeholder="Search for...."
                                               value={this.state.userInput} onKeyPress={e => {
                                            if (e.key === 'Enter') this.handleSubmit(e);
                                        }} onChange={this.handleChange.bind(this)}/>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <p>Value 0</p>
                            <SearchPaginationContainer
                                path={'search'}
                                page={this.state.page}
                                search={this.state.searchTerms}
                                value={0}
                                query={this.props.location.search}
                            />
                        </Row>
                        <Row>
                            <p>Value 1</p>
                            <SearchPaginationContainer
                                path={'search'}
                                page={this.state.page}
                                search={this.state.searchTerms}
                                value={1}
                                query={this.props.location.search}
                            />
                        </Row>
                        <Row>
                            <p>Value 2</p>
                            <SearchPaginationContainer
                                path={'search'}
                                page={this.state.page}
                                search={this.state.searchTerms}
                                value={2}
                                query={this.props.location.search}
                            />
                        </Row>
                    </div>
                </main>
            </Container>
        )

    }
}

const SearchPage = connect(null, mapDispatchToProps)(Search);
export default SearchPage;
