import React from 'react';
import Gridcard from "./Gridcard";
import {CardColumns, Container, Row} from 'reactstrap';
import './InfoCard.css';
import SearchAppBar from "../FilterSortBar/SearchAppBar";


class GridContainer extends React.Component {

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
                <Row>
                    <SearchAppBar/>
                </Row>
                <CardColumns>
                    {output}
                </CardColumns>
            </Container>
        )
    }
}

export default GridContainer;
