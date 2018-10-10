import React, {Component} from 'react';
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";

// import './App.css';
class SortBar extends Component {

//saving this code for the current. will have to be added via js later
// <span className="sr-only">(current)</span>
    render() {
        return (
          <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: '#659dbd'}}>
              <span className="navbar-brand">School Districts</span>
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                      aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"/>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Filter by State
                          </a>

                          <FilterBy />

                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Sort By
                          </a>

                          <SortBy />

                      </li>
                  </ul>
                  <form className="form-inline mt-2 mt-md-0">
                      <input className="form-control mr-sm-2" type="text"
                             placeholder="Search for District" aria-label="Search"/>
                      <button className="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                  </form>
              </div>
          </nav>

        );
    }
}

export default SortBar;
