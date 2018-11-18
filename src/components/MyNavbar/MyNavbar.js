import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {NavLink as RRNavLink, withRouter} from 'react-router-dom';
import './styles.css'
import Input from "@material-ui/core/Input";


const SearchContext = React.createContext('');
class MyNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            userInput: 'hello',
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleChange(e) {
        // debugger;
        this.setState({
            userInput: e.target.value,
        })
    }

    render() {


        debugger;
        return (
            <div>
                <SearchContext.Provider value={{input: this.state.userInput}}/>
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
                        <Input type="search" name="search" id="search" placeholder="Search for...."
                               value={this.state.userInput} onKeyPress={e => {
                            if (e.key === 'Enter') this.handleSubmit(e);
                        }} onChange={this.handleChange.bind(this)}/>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export const SearchContextConsumer = SearchContext.Consumer;

export default withRouter(MyNavbar);
