import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";
import {Button} from 'reactstrap';
import './Carousel.css'

const pictures = [
    '/images/splash-school-template.jpg',
    '/images/splash-charity-template.jpg',
    '/images/splash-community-template.jpeg'];

class Slide extends Component {
    componentWillMount() {
        switch (this.props.title) {
            case "School Districts":
                this.picture = pictures[0];
                break;
            case "Charities":
                this.picture = pictures[1];
                break;
            case "Communities":
                this.picture = pictures[2];
                break;
            default:
                this.picture = pictures[0];
                break;
        }
    }

    render() {
        return (
            <div className={`carousel-item ${this.props.state}`}>
                <img className="first-slide"
                     src={this.picture}
                     alt="First slide"/>
                <div className="container">
                    <div className="carousel-caption text-center">
                        <h1 className="quote">{this.props.quote}</h1>
                        <h2 className="author">{this.props.author}</h2>
                    </div>
                </div>

            </div>

        );
    }
}

export default Slide;
