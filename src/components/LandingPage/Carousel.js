import React, {PureComponent} from 'react';
import Slide from "./Slide";
import './Carousel.css'
import {Link} from 'react-router-dom';

class Carousel extends PureComponent {
    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active"/>
                    <li data-target="#myCarousel" data-slide-to={1}/>
                    <li data-target="#myCarousel" data-slide-to={2}/>
                </ol>
                <div className="carousel-inner">
                    <Slide state="active" title="School Districts" tag={Link} link="/schools" align="text-left"/>
                    <Slide title="Charities" tag={Link} link="/charities"/>
                    <Slide title="Communities" tag={Link} link="/communities" align="text-right"/>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Carousel;
