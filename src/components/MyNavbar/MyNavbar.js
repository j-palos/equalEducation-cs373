import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';
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
                    <NavbarBrand>
                      <a href="/" className="text-white">Equal Education</a>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="nav-item">
                                <NavLink exact to={"/"} activeClassName={'active'} tag={RRNavLink}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/school"} activeClassName={'active'} tag={RRNavLink}>Schools</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/charity"} activeClassName={'active'} tag={RRNavLink}>Charities</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/volunteer"} activeClassName={'active'} tag={RRNavLink}>Communities</NavLink>
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
