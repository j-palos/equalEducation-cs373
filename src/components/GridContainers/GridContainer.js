import React from 'react';
import Gridcard from "./Gridcard";
import {CardDeck, Component} from 'reactstrap';
import './InfoCard.css';


const urls = {
    'charities': 'charity',
    'school_districts': 'school',
    'communities': 'community',
};

class GridContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info: []
        }
    }

    render() {
        let output = [];
        let cards = this.props.info;
        for (let x in cards) {
            output.push(<Gridcard key={cards[x]['Id']} link={`/${urls[cards[x]['Model']]}/${cards[x]['Id']}`}
                                  className={'modelCard'} info={cards[x]['Info']}
                                  src={cards[x]['Image']}/>);
        }
        return (

            <CardDeck className="Card-margin">
                    {output}
                </CardDeck>
        )
    }
}

export default GridContainer;
