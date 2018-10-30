import React from 'react';
import Gridcard from "./Gridcard";
import {Container} from 'reactstrap';
import {Link} from "react-router-dom";

class GridContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            cards: []

        };
    }

    componentDidMount(){
        let json = [
            {
                "id": "1",
                "img": "/images/oakland.jpg",
                "school_link": "school/1",
                "title": "Oakland Unified School District",
                "attrs": {
                    "location": "Oakland, California",
                    "poverty": "12,817",
                    "description": "Oakland Unified School District is a public education school district that operates about 86 elementary schools (K-5), middle schools (6-8), and high schools (9-12) and 32 district-authorized charter schools in Oakland, California, United States serving 49,000 students.",
                    "opportunity_link": "volunteer/1",
                    "opportunity": "Seeking Operations Volunteer for Public Education Fund",
                    "charity_link": "charity/1",
                    "charity": "Oakland Public Education Fund",
                    "grade_range": "KG-12"
                }
            },
            {
                "id": "2",
                "img": "/images/texascity.jpg",
                "school_link": "school/2",
                "title": "Texas City Independant School District",
                "attrs": {
                    "location": "Texas City, Texas",
                    "poverty": "1,594",
                    "description": "Texas City ISD has 14 schools and nearly 9,000 students in 7.31 square miles of La Marque and Texas City. ",
                    "opportunity_link": "volunteer/2",
                    "opportunity": "Dream Builders Coordinator",
                    "charity_link": "charity/2",
                    "charity": "Khambrel Foundation",
                    "grade_range": "PK-12"
                }
            },
            {
                "id": "3",
                "img": "/images/HoustonISD.png",
                "school_link": "school/3",
                "title": "Houston Independent School District",
                "attrs": {
                    "location": "Houston, Texas",
                    "poverty": "76,878",
                    "description": "The Houston Independent School District is the largest school district in Texas and the seventh-largest in the United States.",
                    "opportunity_link": "volunteer/3",
                    "opportunity": "Houston Holiday Luncheon 2018",
                    "charity_link": "charity/3",
                    "charity": "Pratham USA",
                    "grade_range": "PK-8"
                }
            }
        ];
        debugger;
        this.setState({
            cards : json
        })
    }


        render(){
        let output = [];
        let cards = this.state.cards;
        debugger;
            for( let x in cards){
                // debugger;
                // output.push(<Link to={`/${this.props.path}/${cards[x]['id']}`}></Link>);
                    output.push(<Gridcard info={cards[x]['attrs']} imgsrc={'https://cdn.zmescience.com/wp-content/uploads/2018/09/Staples_High_School2C_Westport2C_CT.jpg'} />);
            }
            debugger;
        return(
            <Container>
                {output}
            </Container>
        )
    }
}

export default GridContainer;
