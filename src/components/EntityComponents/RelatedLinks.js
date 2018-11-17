import React from 'react';
import RelatedLinkHelper from "./RelatedLinkHelper";
// import Card from "@material-ui/core/Card/Card";
import {Card, CardBody, CardText, CardTitle} from "reactstrap";

//todo add in api call stuff
const base = 'http://api.equaleducation.info';

const urls = {
    'charity': 'charities',
    'school': 'school_districts',
    'community': 'communities',
};

// const relatedURLS = {
//     'charity' : ['school_id', 'community_id'],
//     'community': ['school_id', 'charity_id'],
//     'school' : ['charity_id']
// };

const relatedURLS = {
    'charity': 'charity',
    'community': 'community',
    'school': 'school_district'
};


const relatedText = {
    'charity': 'Related Charities',
    'school': 'Related School Districts',
    'community': 'Related Communities'
};

class RelatedLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            links: [],
        }
    }

    componentDidMount() {
        console.log('fetching related');
        // debugger;
        let url = `${base}/${urls[this.props.to]}/?${relatedURLS[this.props.from]}_id=${this.props.id}`;
        console.log(url);
        fetch(url)
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw Error;
            })
            .then(data => {
                let loadedTemp;
                // debugger;
                loadedTemp = data[Object.keys(data)[0]];
                // debugger;
                this.setState({
                    links: loadedTemp,
                    loaded: true,
                })
            })
            .catch(() => {
                console.log('errpr')
            })
    }

    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     console.log('related links update id = ' + prevProps.id + ' and this ' + this.props.id);
    //     if (this.props.id !== prevProps.id) {
    //         // debugger;
    //         console.log('fetching related in update');
    //         let url = `${base}/${urls[this.props.to]}/?${relatedURLS[this.props.from]}_id=${this.props.id}`;
    //         // console.log(url);
    //         fetch(url)
    //             .then(results => {
    //                 if(results.ok){
    //                     return results.json();}
    //                 throw Error;
    //             })
    //             .then(data => {
    //                 let loadedTemp;
    //                 // debugger;
    //                 loadedTemp = data[Object.keys(data)[0]];
    //                 // debugger;
    //                 this.setState({
    //                     links: loadedTemp,
    //                     loaded: true,
    //                 })
    //             })
    //             .catch(()=>{console.log('errpr')})
    //     }
    // }

    render() {
        // debugger;
        return (
            <Card>

                <CardBody>
                    <CardTitle>{relatedText[this.props.to]}</CardTitle>
                    {this.state.loaded &&
                    this.state.links.map(entity =>
                        <CardText><RelatedLinkHelper id={entity['Id']} to={this.props.to}>
                            {entity['Name'] || entity['Community']}
                        </RelatedLinkHelper></CardText>)
                    }

                </CardBody>
            </Card>
        )
    }
}


export default RelatedLinks;