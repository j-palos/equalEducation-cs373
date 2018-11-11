import React from 'react';
import Gridcard from "./Gridcard";
import {CardDeck, Container} from 'reactstrap';
import './InfoCard.css';


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
            output.push(<Gridcard key={cards[x]['Id']} link={`/${this.props.path}/${cards[x]['Id']}`}
                                  className={'modelCard'} info={cards[x]['Info']}
                                  src={cards[x]['Image']}/>);
        }
        return (
            <Container>
                <CardDeck className="Card-margin">
                    {output}
                </CardDeck>
            </Container>
        )
    }
}

export default GridContainer;
