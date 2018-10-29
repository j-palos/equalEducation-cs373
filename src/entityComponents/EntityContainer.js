import React, {Component} from "react";
import {Entity} from "./Entity";

//todo add in api call stuff
const exampleInfo = {
    title: "Oakland Unified School District",
    imageURL: 'http://www.equaleducation.info/images/static/oakland.jpg',
    info: {
        "Location": "Oakland, California",
        "Estimated # of Families w/ Children Ages 5-17 Below Poverty Level": "12,817",
        "Description": "Oakland Unified School District is a public education school district that operates about 86 elementary schools (K-5), middle schools (6-8), and high schools (9-12) and 32 district-authorized charter schools in Oakland, California, United States serving 49,000 students."
    },
    orgs: {"Oakland Public Education Fund": 0},
    locationURL: '',
};
export default class EntityContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info: {},
            true: false
        }
    }

    componentDidMount() {
        // Here we can perform api call for entity info based on this.props.type value
        this.setState({
            info: exampleInfo,
            loaded: true,
        })
    }

    render() {
        return (
            <div>
                {this.state.loaded && <Entity info={this.state.info}/>}
            </div>
        )
    }
}