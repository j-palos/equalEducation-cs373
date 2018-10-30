import React from 'react';
import Gridcard from "./Gridcard";
import {CardColumns, Container} from 'reactstrap';
import './InfoCard.css';

class GridContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: []

        };
    }

    componentDidMount() {
        let json = [
            {
                "Id": "3",
                "Image": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png",
                "school_link": "school/3",
                "Name": "Houston Independent School District",
                "Info": {
                    "location": "Houston, Texas",
                    "poverty": "76,878",
                    "description": "The Houston Independent School District is the largest school district in Texas and the seventh-largest in the United States.",
                    "opportunity_link": "volunteer/3",
                    "opportunity": "Houston Holiday Luncheon 2018",
                    "charity_link": "charity/3",
                    "charity": "Pratham USA",
                    "grade_range": "PK-8"
                }
            },
            {
                "Id": "3",
                "Image": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png",
                "school_link": "school/3",
                "Name": "Houston Independent School District",
                "Info": {
                    "location": "Houston, Texas",
                    "poverty": "76,878",
                    "description": "The Houston Independent School District is the largest school district in Texas and the seventh-largest in the United States.",
                    "opportunity_link": "volunteer/3",
                    "opportunity": "Houston Holiday Luncheon 2018",
                    "charity_link": "charity/3",
                    "charity": "Pratham USA",
                    "grade_range": "PK-8"
                }
            },
            {
                "Id": "3",
                "Image": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png",
                "school_link": "school/3",
                "Name": "Houston Independent School District",
                "Info": {
                    "location": "Houston, Texas",
                    "poverty": "76,878",
                    "description": "The Houston Independent School District is the largest school district in Texas and the seventh-largest in the United States.",
                    "opportunity_link": "volunteer/3",
                    "opportunity": "Houston Holiday Luncheon 2018",
                    "charity_link": "charity/3",
                    "charity": "Pratham USA",
                    "grade_range": "PK-8"
                }
            },
            {
                "Id": "3",
                "Image": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png",
                "school_link": "school/3",
                "Name": "Houston Independent School District",
                "Info": {
                    "location": "Houston, Texas",
                    "poverty": "76,878",
                    "description": "The Houston Independent School District is the largest school district in Texas and the seventh-largest in the United States.",
                    "opportunity_link": "volunteer/3",
                    "opportunity": "Houston Holiday Luncheon 2018",
                    "charity_link": "charity/3",
                    "charity": "Pratham USA",
                    "grade_range": "PK-8"
                }
            },
            {
                "Id": "3",
                "Image": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png",
                "school_link": "school/3",
                "Name": "Houston Independent School District",
                "Info": {
                    "location": "Houston, Texas",
                    "poverty": "76,878",
                    "description": "The Houston Independent School District is the largest school district in Texas and the seventh-largest in the United States.",
                    "opportunity_link": "volunteer/3",
                    "opportunity": "Houston Holiday Luncheon 2018",
                    "charity_link": "charity/3",
                    "charity": "Pratham USA",
                    "grade_range": "PK-8"
                }
            },
            {
                "Id": "3",
                "Image": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png",
                "school_link": "school/3",
                "Name": "Houston Independent School District",
                "Info": {
                    "location": "Houston, Texas",
                    "poverty": "76,878",
                    "description": "The Houston Independent School District is the largest school district in Texas and the seventh-largest in the United States.",
                    "opportunity_link": "volunteer/3",
                    "opportunity": "Houston Holiday Luncheon 2018",
                    "charity_link": "charity/3",
                    "charity": "Pratham USA",
                    "grade_range": "PK-8"
                }
            }, {
                "Id": "3",
                "Image": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png",
                "school_link": "school/3",
                "Name": "Houston Independent School District",
                "Info": {
                    "location": "Houston, Texas",
                    "poverty": "76,878",
                    "description": "The Houston Independent School District is the largest school district in Texas and the seventh-largest in the United States.",
                    "opportunity_link": "volunteer/3",
                    "opportunity": "Houston Holiday Luncheon 2018",
                    "charity_link": "charity/3",
                    "charity": "Pratham USA",
                    "grade_range": "PK-8"
                }
            },
            {
                "Id": "3",
                "Image": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png",
                "school_link": "school/3",
                "Name": "Houston Independent School District",
                "Info": {
                    "location": "Houston, Texas",
                    "poverty": "76,878",
                    "description": "The Houston Independent School District is the largest school district in Texas and the seventh-largest in the United States.",
                    "opportunity_link": "volunteer/3",
                    "opportunity": "Houston Holiday Luncheon 2018",
                    "charity_link": "charity/3",
                    "charity": "Pratham USA",
                    "grade_range": "PK-8"
                }
            },
            {
                "Id": "3",
                "Image": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png",
                "school_link": "school/3",
                "Name": "Houston Independent School District",
                "Info": {
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
        this.setState({
            cards: json
        })
    }

    render() {
        let output = [];
        let cards = this.state.cards;
        for (let x in cards) {
            output.push(<Gridcard key={cards[x]['Id']} link={`/${this.props.path}/${cards[x]['Id']}`}
                                  className={'modelCard'} info={cards[x]['Info']}
                                  src={cards[x]['Image']}/>);
        }
        return (
            <Container>
                <CardColumns>
                    {output}
                </CardColumns>
            </Container>
        )
    }
}

export default GridContainer;
