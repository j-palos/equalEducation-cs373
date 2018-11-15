import React from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Row} from 'reactstrap';
import PaginationContainer from "../PaginationComponents/PaginationContainer";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import AppBar from "@material-ui/core/AppBar/AppBar";


// function TabContainer(props) {
//     return (
//         <Typography component="div" style={{padding: 8 * 3}}>
//             {props.children}
//         </Typography>
//     );
// }

class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: this.props.match.params.input || '',
            page: this.props.match.params.page || 1,
            type: 'all',
            value: 0,
            submitted: false,
        }
    }

    componentWillReceiveProps(props) {
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
        let value = this.state.userInput;
        debugger;
        value = value.replace(/ /g, "+");
        debugger;
        // debugger;
        // this.getData();
        this.setState({
            search: value,
            submitted: true,
        });
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
                                        {/*<Label for="search" style={{margin :'auto'}}>Search</Label>*/}
                                        <AppBar position="static">
                                            <Tabs value={this.state.value} onChange={this.handleTabChange}
                                                  indicatorColor={'inherit'}
                                                  textColor={'inherit'}
                                                  centered>
                                                <Tab label="Site"/>
                                                <Tab label="Schools"/>
                                                <Tab label="Communities"/>
                                                <Tab label={"Charities"}/>
                                            </Tabs>
                                        </AppBar>
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
                                {this.state.submitted && <PaginationContainer
                                    path={'search'}
                                    page={this.state.page}
                                    search={this.state.search}
                                    value={this.state.value}
                                />}
                            </Col>
                        </Row>
                    </div>
                </main>
            </Container>
        )

    }
}


export default SearchPage;
