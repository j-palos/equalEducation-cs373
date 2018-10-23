import React from 'react';
import {CardText} from 'reactstrap';

export const EntityInfo = (props) => {

    let information = props.info;
    let children = [];
    let keys = Object.keys(information);

    for (let i = 0; i < Object.values(keys).length; i++) {
        children.push(<span key={keys[i]}>{keys[i]}: <strong>{information[keys[i]]}</strong> <br/> </span>)
    }
    return (
        <CardText className={"lead text-center"}>
            {children}
        </CardText>
    )
};
