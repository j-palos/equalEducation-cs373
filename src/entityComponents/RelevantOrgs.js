import React from 'react';
import {Card, CardBody, CardDeck, CardText} from 'reactstrap';


export const RelevantOrgs = (props) => {

    let orgs = props.orgs;
    let children = [];
    let keys = Object.keys(orgs);

    for (let i = 0; i < Object.values(keys).length; i++) {
        children.push(<Card key={keys[i]}><CardBody> <CardText>{keys[i]}: Insert info stuff here and
            image</CardText></CardBody></Card>)

    }
    return (
        <CardDeck>
            {children}
        </CardDeck>
    )
};
