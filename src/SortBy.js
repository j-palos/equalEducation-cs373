import React, {Component} from 'react';

// import './App.css';
class SortBy extends Component {

//saving this code for the current. will have to be added via js later
// <span className="sr-only">(current)</span>
    render() {
        return (
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Date Established</a>
              <a className="dropdown-item" href="#">District Name</a>
              <a className="dropdown-item" href="#">Poverty Level</a>
          </div>

        );
    }
}

export default SortBy;
