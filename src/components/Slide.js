import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";
import {Button, Col, Row} from 'reactstrap';

const pictures = [
                '/images/splash-school-template.jpg', 
                '/images/splash-charity-template.jpeg', 
                '/images/splash-community-template.jpeg'];

class Slide extends Component {
    componentWillMount() {
        switch(this.props.title) {
            case "School Districts":
                this.picture = pictures[0];
                break;
            case "Charities":
                this.picture = pictures[1];
                break;
            case "Communities":
                this.picture = pictures[2];
                break;
        }
      }
    
    render() {
        return(
            <div className={`carousel-item ${this.props.state}`}>
                <img className="first-slide"
                    src={this.picture}
                    alt="First slide"/>
                <div className="container">
                    <div className="carousel-caption text-left">
                        <h1>{this.props.title}</h1>
                        <p>
                            <Link to={this.props.link}>
                                <Button color="success">Learn More</Button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Slide;