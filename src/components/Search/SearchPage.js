import React from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Row} from 'reactstrap';
import PaginationContainer from "../PaginationComponents/PaginationContainer";


class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: this.props.match.params.input || '',
            page: this.props.match.params.page || 1
        }
    }

    componentWillReceiveProps(props) {
        this.props = props;
        this.setState({'page': props.match.params.page || 1});
    }

    handleChange(e) {
        // debugger;
        this.setState({
            userInput: e.target.value,

        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.clear();
        // this.getData();
        debugger;
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
                                        {/*<Label for="search" style={{margin :'auto'}}>Search</Label>*/}
                                        <Input type="search" name="search" id="search" placeholder="Search for...."
                                               value={this.state.userInput} onKeyPress={e => {
                                            if (e.key === 'Enter') this.handleSubmit(e);
                                        }} onChange={this.handleChange.bind(this)}/>
                                        <Button variant="contained" color="inherit"
                                                onClick={(e) => this.handleSubmit(e)}
                                                className={'mx-auto'} style={{margin: '2%'}}>
                                            Submit
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                        <PaginationContainer
                            path={'search'}
                            page={this.state.page}
                        />
                    </div>
                </main>
            </Container>
        )

    }
}


export default SearchPage;
