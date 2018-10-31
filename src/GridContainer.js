import React from 'react';
import Gridcard from "./Gridcard";
import {CardColumns, Container} from 'reactstrap';
import './InfoCard.css';


class GridContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info: []
        }
    }

    // componentDidMount(){
    //     let currentPage = Number(this.props.match.params['id']);
    //     // debugger;
    //     if (isNaN(currentPage)) {
    //         currentPage = 1;
    //     }
    //     let url = `${base}/${urls[this.props.path]}/?page=${currentPage}`;
    //     fetch(url)
    //         .then(results => {
    //             return results.json();
    //         })
    //         .then(data => {
    //             let totalPages = data['num_pages'];
    //             let info = data['grid'];
    //             debugger;
    //             this.setState({
    //                 total: totalPages,
    //                 info : info
    //             })
    //         })
    // };

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
                <CardColumns>
                    {output}
                </CardColumns>
            </Container>
        )
    }
}

export default GridContainer;
