import React, {Component} from 'react';
import MyNavbar from "./components/MyNavbar";

class Header extends Component {

//saving this code for the current. will have to be added via js later
// <span className="sr-only">(current)</span>
    render() {
        return (
            <header>
                <MyNavbar/>
            </header>
        );
    }
}

export default Header;
