import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {NavLink as RRNavLink, withRouter} from 'react-router-dom';
import './styles.css'

class MyNavbar extends React.Component {
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
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(MyNavbar);
