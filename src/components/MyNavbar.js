import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';

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
                <Navbar color="dark" dark expand="md" fixed={"top"}>
                    <NavbarBrand>Equal Education</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to={'/'} activeClassName={'active'} tag={RRNavLink}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/school"} activeClassName={'active'} tag={RRNavLink}>Schools</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/volunteer"} activeClassName={'active'} tag={RRNavLink}>Volunteer
                                    Opportunities</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/charity"} activeClassName={'active'} tag={RRNavLink}>Charities</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/about"} activeClassName={'active'} tag={RRNavLink}>About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MyNavbar;