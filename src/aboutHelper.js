import React, {Component} from 'react';
import kyleImage from './images/cropped-20180128_162201_15171782536921.jpeg';
import intaeImage from './images/intae.jpg';
import prateekImage from './images/prateek.jpg';
import jesusImage from './images/jesus.jpg';
import andrewImage from './images/andrew.jpeg';
import {Col, Row} from 'reactstrap';


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

class AboutHelper extends Component {

    constructor() {
        super();
        this.state = {
            done_names: false,
            done_issues: false,
            names: [],
            loaded: false
        };
        // this.generator = this.generator.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    * generator() {
        // getData.call();
        let developers = this.state.names;
        // debugger;
        for (let i = 0; i < 6; i++) {
            let developer = developers[i];
            // debugger;
            yield (
                <Col>
                    <img className="rounded-circle" src={images[developer.name]}
                         alt="Generic placeholder image" width={140} height={140}/>
                    <h2>{developer.name}</h2>
                    {/*<p>{profile[developer.name]}</p>*/}
                    <ul className="list-group">
                        <li className="list-group-item">{profile[developer.name]}</li>
                        <li className="list-group-item">Commits: {developer.commits} </li>
                        <li className="list-group-item">Issues: {developer.issues}</li>
                        <li className="list-group-item">Unit tests: {developer.unit_test}</li>
                    </ul>
                </Col>
            )
        }

    };

    getData() {
        fetch('https://gitlab.com/api/v4/projects/8524331/repository/contributors')
            .then(results => {
                return results.json();
            }).then(data => {
            let email_dict = {
                "ryooit@utexas.edu": "Intae",
                "ryooit70@gmail.com": "Intae",
                "ksotengco@gmail.com": "Kyle",
                "prateek.kolhar@utexas.edu": "Prateek",
                "jesus.rpalos@gmail.com": "Jesus",
                "jpjessep@users.noreply.github.com": "Jesus"
                //todo ADD Andrew
            };
            let counter_dict = {
                "Intae": 0,
                "Kyle": 0,
                "Prateek": 0,
                "Jesus": 0,
                "Andrew": 0
            };
            for (let i = 0; i < data.length; i++) {
                let value = data[i].email;
                if (email_dict[value]) {
                    counter_dict[email_dict[value]] += data[i].commits;
                }
            }
            let nameArray = [];
            for (let name in counter_dict) {
                nameArray.push({
                    name: name,
                    commits: counter_dict[name],
                    issues: 0,
                    unit_test: 0,
                });
            }
            this.setState({names: nameArray, done_names: true, loaded: true});
        })
    };

    render() {
        let gen = this.generator();
        // let gen;
        if (this.state.loaded) {
            // debugger;
            return (
                <div>
                    <Row>
                        {(gen.next().value)}
                        {(gen.next().value)}
                        {(gen.next().value)}
                    </Row>
                    <Row>
                        <Col xs={'2'}> </Col>
                        {(gen.next().value)}
                        {(gen.next().value)}
                        <Col xs={'2'}> </Col>
                    </Row>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Row></Row>
                    <Row></Row>
                </div>
            )
        }
    }
}

export default AboutHelper;
