import React, {Component} from 'react';
import Slide from "./Slide";
import './Carousel.css'
import {Link} from 'react-router-dom';

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
                    <Slide state="active" quote="''Education is the most powerful weapon 
                    which you can use to change the world.''" author="Nelson Mandela" align="text-left"/>
                    <Slide quote="''Education is the passport to the future, for tomorrow belongs to 
                    those who prepare for it today.''" author="Malcolm X"/>
                    <Slide quote="''Knowledge is power. Information is liberating. Education is the 
                    premise of progress, in every society, in every family.''" author="Kofi Annan" 
                    align="text-right"/>
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
