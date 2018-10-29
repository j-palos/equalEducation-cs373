import React, {Component} from 'react';
import './index.css';

class Footer extends Component {

//saving this code for the current. will have to be added via js later
// <span className="sr-only">(current)</span>
    render() {
        return (
            <footer className="container">
                <p className="float-right"><a href="#">Back to top</a></p>
                <p className="float-left">© Equal Education</p>
            </footer>

        );
    }
}

export default Footer;
