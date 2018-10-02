import React, { Component } from 'react';
import Link from "react-router-dom/es/Link";
// import './styles/carousel.css';
// import './styles/bootstrap-4.1.3-dist/css/bootstrap.min.css';
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {

//saving this code for the current. will have to be added via js later
// <span className="sr-only">(current)</span>
    render() {
        return (
<header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="navbar-brand"><Link to={'/'}>Equal Education</Link></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <div className="nav-link" ><Link to={'/'}>Home </Link><span className="sr-only">(current)</span></div>
                </li>
                <li className="nav-item active">
                    <div className="nav-link"><Link to={'/school'}>School Districts </Link></div>
                </li>
                <li className="nav-item">
                    <div className="nav-link"><Link to={'/volunteer'}>Volunteer</Link></div>
                </li>
                <li className="nav-item">
                    <div className="nav-link"><Link to={'/charity'}>Charity</Link></div>
                </li>
                <li className="nav-item">
                    <div className="nav-link"><Link to={'/about'}> About</Link></div>
                </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</header>
        );
    }
}

export default Header;