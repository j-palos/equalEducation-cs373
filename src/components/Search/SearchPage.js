import React from 'react';
import {Button as MyButton, Col, Container, Form, FormGroup, Input, Row} from 'reactstrap';
import {changeTerms} from "../../js/store/actions";
import connect from "react-redux/es/connect/connect";
import GridContainer from "../GridContainers/GridContainer";
import {EntityName} from "../EntityComponents/EntityName";
import './SearchPage.css';
import Button from "@material-ui/core/Button/Button";
import {withStyles} from '@material-ui/core/styles';


const mapDispatchToProps = dispatch => {
    return {
        changeTerms: term => dispatch(changeTerms(term))
    };
};


const style = theme => ({
    fab: {
        margin: 0,
        top: 'auto',
        right: '10%',
        bottom: 20,
        left: 'auto',
        position: 'fixed',

    }
});

const base = 'http://api.equaleducation.info';

const searchurl = {
    'search': 'search',
    0: 'all',
    1: 'school_districts',
    2: 'charities',
    3: 'communities'
};

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: this.props.match.params.input || '',
            page: this.props.match.params.page || 1,
            charity_submitted: false,
            school_submitted: false,
            community_submitted: false,
            info_schools: [],
            info_charities: [],
            info_communities: [],
            intervalId: 0,
        }
    }

    componentWillReceiveProps(props) {
        this.setState({'page': props.match.params.page || 1});
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value,
        });
    }

    componentWillMount() {
        this.props.changeTerms('')
    }

    /**
     * Modify this to deal with the fact that our search terms are now an array
     * @param currentPage
     * @param type
     * @returns {string}
     */
    getSearchAPIURL(currentPage, type) {
        let value = String(this.state.userInput.trim()).replace(/,/g, "+");
        return `${base}/${searchurl[type]}?page=${currentPage}&search=${value}&list=999`;
    }


    getData() {
        fetch(this.getSearchAPIURL(1, 1))
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                let info = data['grid'];
                this.setState({
                    charity_submitted: true,
                    info_schools: info,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        fetch(this.getSearchAPIURL(1, 2))
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                let info = data['grid'];
                this.setState({
                    school_submitted: true,
                    info_charities: info,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        fetch(this.getSearchAPIURL(1, 3))
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                let info = data['grid'];
                this.setState({
                    community_submitted: true,
                    info_communities: info,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({intervalId: intervalId});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.clear();
        this.getData();
        this.props.changeTerms(e.target.value);
    };


    render() {
        const {classes} = this.props;
        return (
            <Container>
                <main role="main">
                    <div className="container marketing my-5">
                        <br/><br/>
                        <Row>
                            <Col>
                                <Form inline>
                                    <FormGroup>
                                        <Input type="search" name="search" id="search" placeholder="Search for...."
                                               value={this.state.userInput} onKeyPress={e => {
                                            if (e.key === 'Enter') this.handleSubmit(e);
                                        }} onChange={this.handleChange.bind(this)}/>
                                        <MyButton color={'primary'} onClick={e => {
                                            this.handleSubmit(e)
                                        }}>Submit</MyButton>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {this.state.school_submitted && this.state.info_schools.length !== 0 &&
                                <MyButton className={'button'} color={'primary'} href={'#schools'}>Schools</MyButton>
                                }
                                {this.state.charity_submitted && this.state.info_charities.length !== 0 &&
                                <MyButton className={'button'} color={'primary'}
                                          href={'#charities'}>Charities</MyButton>
                                }
                                {this.state.community_submitted && this.state.info_communities.length !== 0 &&
                                <MyButton className={'button'} color={'primary'}
                                          href={'#communities'}>Communities</MyButton>
                                }
                            </Col>
                        </Row>

                        {this.state.charity_submitted && this.state.info_charities.length !== 0 &&
                        <Row>
                            <a className={'anchor'} id={'charities'}/>
                            <EntityName title={"Results for Charities"}/>
                            <GridContainer info={this.state.info_charities}/>
                        </Row>
                        }
                        {this.state.school_submitted && this.state.info_schools.length !== 0 &&
                        <Row id={'schools'}>
                            <EntityName title={"Results for Schools"}/>
                            <GridContainer info={this.state.info_schools}/>
                        </Row>
                        }
                        {this.state.community_submitted && this.state.info_communities.length !== 0 &&
                        <Row id={'communities'}>
                            <EntityName title={"Results for Communities"}/>
                            <GridContainer info={this.state.info_communities}/>
                        </Row>
                        }
                        {this.state.community_submitted &&
                        this.state.school_submitted &&
                        this.state.charity_submitted &&
                        this.state.info_charities.length === 0 &&
                        this.state.info_communities.length === 0 &&
                        this.state.info_schools.length === 0 &&
                        <Row>
                            <Col>
                                <p>There doesn't seem to be any results</p>
                            </Col>
                        </Row>

                        }
                        <Button variant="fab" color="secondary" aria-label="Jump To Top" className={classes.fab}
                                onClick={() => {
                                    this.scrollToTop();
                                }}>
                            Top
                        </Button>
                    </div>
                </main>
            </Container>
        )
    }
}

const SearchPage = connect(null, mapDispatchToProps)(Search);
export default withStyles(style)(SearchPage);
