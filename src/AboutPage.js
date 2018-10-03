import React, {Component} from 'react';
import Header from "./Header";
import './styles/carousel.css';
import './styles/bootstrap-4.1.3-dist/css/bootstrap.min.css';
import image from './images/placeholder.jpg';
import Footer from './Footer';
import kyleImage from './images/cropped-20180128_162201_15171782536921.jpeg';
import intaeImage from './images/intae.jpg';
import prateekImage from './images/prateek.jpg';
import jesusImage from './images/jesus.jpg';
import andrewImage from './images/andrew.jpeg';

// import profile from './profile';

const profile = {
    "Intae" : " I’m a senior at UTCS from Daegu, South Korea. I’m interested in machine learning and trading. I hope I could find alpha by utilizing machine learning. Responsibilities: I was responsible for the front-end design and documentation.",
    "Kyle" : "I'm a senior at UTCS from La Marque, Texas. I'm interested in game development and hope to have my own game company one day! Responsibilities: I was responsible for the front-end design and documentation.",
    "Prateek" : "I’m a Masters student at UTCS. I’m interested in NLP and CV. Responsibilities: I am responsible for the back-end development and API design.",
    "Andrew" : "I’m a senior at UTCS from Richmond, Kentucky. I’m interested in cloud computing and GIS mapping. Responsibilities: I am responsible for back-end development and operations.",
    "Jesus" : "I'm A senior at UTCS, from around. I'm interested in full stack and cyber security. Responsibilities:I have mostly been responsible for setting up react ",
};

const images = {
    "Intae" : intaeImage,
    "Kyle" : kyleImage ,
    "Prateek" : prateekImage,
    "Andrew" : andrewImage,
    "Jesus": jesusImage,
};

class AboutPage extends Component {


    constructor() {
        super();
        this.state = {
            done_names : false,
            done_issues : false,
            names: [],
        };
    }

    componentDidMount() {
        let issuesMap ;


        fetch('https://gitlab.com/api/v4/projects/8524331/repository/contributors')
            .then(results => {
                return results.json();
            }).then(data => {

            console.log(data);
            // debugger;
            let email_dict = {
                "ryooit@utexas.edu": "Intae",
                "ryooit70@gmail.com": "Intae",
                "ksotengco@gmail.com": "Kyle",
                "prateek.kolhar@utexas.edu": "Prateek",
                "jesus.rpalos@gmail.com": "Jesus",
                "jpjessep@users.noreply.github.com": "Jesus",
                // Add Andrew
            };

            let counter_dict = {
                "Intae": 0,
                "Kyle": 0,
                "Prateek": 0,
                "Jesus": 0,
                "Andrew": 0,
            };
            for (let i = 0; i < data.length; i++) {
                let value = data[i].email;
                counter_dict[email_dict[value]] += data[i].commits;
            }

            console.log(counter_dict);

            // debugger;
            let nameArray = [{}];
            for (let name in counter_dict) {
                if (name) {
                    nameArray.push({
                        name: name,
                        commits: counter_dict[name],
                        issues: 0,
                        unit_test: 0,
                    });
                }
            }
            console.log("state:", nameArray);
            this.setState({names: nameArray, done_names : true});
        })
    }
    render() {

        let counter = 0;
        let developers = this.state.names;
        return (
            <div>
                <Header/>
                <main role="main">
                    <div className="container marketing">
                        <hr className="featurette-divider"/>
                        <div className="row featurette">
                            <div className="col">
                                <h1>About the Site</h1>
                                <p className="lead">A website to help people find charitable opportunities to assist
                                    underprivileged children with their education. The website would aggregate a large
                                    number of low income areas and showcase possible volunteer events/charity
                                    organizations within those areas. Users would then be able to donate their time
                                    and/or money to these organizations through our website.</p>
                            </div>
                        </div>
                        <hr className="featurette-divider"/>
                        <div className="row featurette">
                            <div className="col">
                                <h1>About our Data</h1>
                                <p className="lead">Charity Navigator, Census Govt, Volunteer match (RESTful APIs)</p>
                            </div>
                        </div>
                        <hr className="featurette-divider"/>
                        {/* Three columns of text below the carousel */}
                        {/*{this.state.names}*/}
                            {

                                // if(this.state.done_names && this.state.done_issues){
                                developers.map((developer) => {
                                        // debugger
                                    if(developer.name){
                                           return( <div>
                                            <div className={"row"}>
                                            <div key={developer['name']}>
                                                <div className="col">
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
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                        );
                                    }else{
                                        return(<div></div>)
                                    }}
                                )
                            }

                    </div>
                    {/* FOOTER */}
                    <Footer/>
                </main>
            </div>);
    }
}

export default AboutPage;
