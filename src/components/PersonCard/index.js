import React from 'react';
import kyleImage from '../../images/profiles/kyle.jpeg';
import intaeImage from '../../images/profiles/intae.jpg';
import prateekImage from '../../images/profiles/prateek.jpg';
import jesusImage from '../../images/profiles/jesus.jpg';
import andrewImage from '../../images/profiles/andrew.jpeg';
import ailynImage from '../../images/profiles/ailyn.png';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import './styles.css'


const profile = {
    "Intae": " I’m a senior at UTCS from Daegu, South Korea. I’m interested in machine learning and trading. I hope I could find alpha by utilizing machine learning.",
    "Kyle": "I'm a senior at UTCS from La Marque, Texas. I'm interested in game development and hope to have my own game company one day!",
    "Prateek": "I’m a Masters student at UTCS. I’m interested in NLP and CV.",
    "Andrew": "I’m a senior at UTCS from Richmond, Kentucky. I’m interested in cloud computing and GIS mapping.",
    "Jesus": "I'm a senior at UTCS, from around. I'm interested in full stack and cyber security.",
    "Ailyn": "I'm a junior at UTCS, from El Paso, Texas. I'm interested in cyber security and web development.",
};

const responsibilities = {
    "Intae": "Responsibilities: I am responsible for the front-end design and documentation.",
    "Kyle": "Responsibilities: I am responsible for the front-end design and documentation.",
    "Prateek": "Responsibilities: I am responsible for the back-end development and API design.",
    "Andrew": "Responsibilities: I am responsible for back-end development and operations.",
    "Jesus": "Responsibilities: I am responsible for front-end design and architecture. I worked with the backend to make sure our API was connected",
    "Ailyn": "Responsibilities: I am responsible for the front end design.",
};

const images = {
    "Intae": intaeImage,
    "Kyle": kyleImage,
    "Prateek": prateekImage,
    "Andrew": andrewImage,
    "Jesus": jesusImage,
    "Ailyn": ailynImage,
};

function PersonCard(props) {
    return (
        <Card className="card-top-padding">
            <CardImg top className="rounded-circle card-img-top mx-auto" src={images[props.name]}
                     alt={"Card image"} style={{width: 180, height: 180}}/>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardText>{profile[props.name]}</CardText>
                <CardText>{responsibilities[props.name]}</CardText>
            </CardBody>
        </Card>
    );
}

export default PersonCard
