import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {Link} from "react-router-dom";

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
                    <NavbarBrand><Link to={"/"}>Equal Education</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className={"active"}>
                                <NavLink><Link to={"/"}>Home</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to={"/school"}>Schools</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to={"/volunteer"}>Volunteer Opportunities</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to={"/charity"}>Charities</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to={"/about"}>About</Link></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MyNavbar;

{/*<UncontrolledDropdown nav inNavbar>*/
}
{/*<DropdownToggle nav caret>*/
}
{/*Options*/
}
{/*</DropdownToggle>*/
}
{/*<DropdownMenu right>*/
}
{/*<DropdownItem>*/
}
{/*Option 1*/
}
{/*</DropdownItem>*/
}
{/*<DropdownItem>*/
}
{/*Option 2*/
}
{/*</DropdownItem>*/
}
{/*<DropdownItem divider />*/
}
{/*<DropdownItem>*/
}
{/*Reset*/
}
{/*</DropdownItem>*/
}
{/*</DropdownMenu>*/
}
{/*</UncontrolledDropdown>*/
}
{/*<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">*/
}
{/*<div className="navbar-brand"><Link to={'/'}>Equal Education</Link></div>*/
}
{/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/
}
{/*data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"*/
}
{/*aria-label="Toggle navigation">*/
}
{/*<span className="navbar-toggler-icon"/>*/
}
{/*</button>*/
}
{/*<div className="collapse navbar-collapse" id="navbarCollapse">*/
}
{/*<ul className="navbar-nav mr-auto">*/
}
{/*<li className="nav-item">*/
}
{/*<div className="nav-link"><Link to={'/'}>Home </Link><span*/
}
{/*className="sr-only">(current)</span></div>*/
}
{/*</li>*/
}
{/*<li className="nav-item active">*/
}
{/*<div className="nav-link"><Link to={'/school'}>School Districts </Link></div>*/
}
{/*</li>*/
}
{/*<li className="nav-item">*/
}
{/*<div className="nav-link"><Link to={'/volunteer'}>Volunteer</Link></div>*/
}
{/*</li>*/
}
{/*<li className="nav-item">*/
}
{/*<div className="nav-link"><Link to={'/charity'}>Charity</Link></div>*/
}
{/*</li>*/
}
{/*<li className="nav-item">*/
}
{/*<div className="nav-link"><Link to={'/about'}> About</Link></div>*/
}
{/*</li>*/
}
{/*</ul>*/
}
{/*<form className="form-inline mt-2 mt-md-0">*/
}
{/*<input className="form-control mr-sm-2" type="text" placeholder="Search"*/
}
{/*aria-label="Search"/>*/
}
{/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/
}
{/*</form>*/
}
{/*</div>*/
}
{/*</nav>*/
}
