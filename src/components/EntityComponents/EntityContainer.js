import React, {Component} from "react";
import {Entity} from "./Entity";

//todo add in api call stuff
const base = 'http://api.equaleducation.info';

const urls = {
    'charity': 'charities',
    'school': 'school_districts',
    'community': 'communities',
};

export default class EntityContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info: [],
            true: false,
        }
    }

    componentDidMount() {
        // Here we can perform api call for entity info based on this.props.type value
        let id = Number(this.props.match.params['entityId']);
        let url = `${base}/${urls[this.props.type]}/?id=${id}`;
        fetch(url)
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({
                    info: data,
                    loaded: true,
                })
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
