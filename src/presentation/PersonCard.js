import React from 'react';
import kyleImage from '../images/cropped-20180128_162201_15171782536921.jpeg';
import intaeImage from '../images/intae.jpg';
import prateekImage from '../images/prateek.jpg';
import jesusImage from '../images/jesus.jpg';
import andrewImage from '../images/andrew.jpeg';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';


const profile = {
    "Intae": " I’m a senior at UTCS from Daegu, South Korea. I’m interested in machine learning and trading. I hope I could find alpha by utilizing machine learning. Responsibilities: I was responsible for the front-end design and documentation.",
    "Kyle": "I'm a senior at UTCS from La Marque, Texas. I'm interested in game development and hope to have my own game company one day! Responsibilities: I was responsible for the front-end design and documentation.",
    "Prateek": "I’m a Masters student at UTCS. I’m interested in NLP and CV. Responsibilities: I am responsible for the back-end development and API design.",
    "Andrew": "I’m a senior at UTCS from Richmond, Kentucky. I’m interested in cloud computing and GIS mapping. Responsibilities: I am responsible for back-end development and operations.",
    "Jesus": "I'm A senior at UTCS, from around. I'm interested in full stack and cyber security. Responsibilities:I have mostly been responsible for setting up react ",
};

const images = {
    "Intae": intaeImage,
    "Kyle": kyleImage,
    "Prateek": prateekImage,
    "Andrew": andrewImage,
    "Jesus": jesusImage,
};

function PersonCard(props) {
    return (
        <Card>
            <CardImg top className="rounded-circle" src={images[props.name]}
                     alt={"Card image"} width={140} height={140}/>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardText>{profile[props.name]}</CardText>
                {/* <li className="list-group-item">Commits: {developer.commits} </li>
                        <li className="list-group-item">Issues: {developer.issues}</li>
                        <li className="list-group-item">Unit tests: {developer.unit_test}</li> */}
            </CardBody>
        </Card>
    );
}

export default PersonCard
