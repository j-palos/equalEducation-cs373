import React, {Component} from 'react';
import Slide from "./Slide";

class Carousel extends Component {
    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active"/>
                    <li data-target="#myCarousel" data-slide-to={1}/>
                    <li data-target="#myCarousel" data-slide-to={2}/>
                </ol>
                <div className="carousel-inner">
                    <Slide state="active" title="School Districts" link="/school" align="text-left"/>
                    <Slide title="Charities" link="/charity"/>
                    <Slide title="Communities" link="/volunteer" align="text-right"/>
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