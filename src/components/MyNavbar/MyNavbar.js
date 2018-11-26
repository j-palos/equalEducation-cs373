import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {NavLink as RRNavLink, withRouter} from 'react-router-dom';
import './styles.css'
import Input from "@material-ui/core/Input";
import {changeTerms} from "../../js/store/actions";
import connect from "react-redux/es/connect/connect";

const mapDispatchToProps = dispatch => {
    return {
        changeTerms: term => dispatch(changeTerms(term))
    };
};

const mapStateToProps = state => {
    return {searchTerms: state.searchTerms};
};

class Myavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value,
        });
        this.props.changeTerms(e.target.value);

    }

    handleSubmit() {
        this.props.history.push('/search');
    }

    render() {


        return (
            <div>
                <Navbar style={{backgroundColor: '#07969b'}} dark expand="md" fixed={"top"}>
                    <NavbarBrand tag={RRNavLink} to={"/"}>
                        <span className="text-white">Equal Education</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="nav-item">
                                <NavLink exact to={"/"} activeClassName={'active'} tag={RRNavLink}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/schools"} activeClassName={'active'} tag={RRNavLink}>Schools</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/communities"} activeClassName={'active'}
                                         tag={RRNavLink}>Communities</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/charities"} activeClassName={'active'}
                                         tag={RRNavLink}>Charities</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/about"} activeClassName={'active'} tag={RRNavLink}>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/search"} activeClassName={'active'} tag={RRNavLink}>Search</NavLink>
                            </NavItem>
                        </Nav>
                        <Input type="search" name="search" id="search" placeholder="Search Within Page.."
                               value={String(this.props.searchTerms).replace(/,/g, ' ')} onKeyPress={e => {
                            if (e.key === 'Enter') this.handleSubmit(e);
                        }} onChange={this.handleChange.bind(this)}/>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const MyNavbar = connect(mapStateToProps, mapDispatchToProps)(Myavbar);
export default withRouter(MyNavbar);
