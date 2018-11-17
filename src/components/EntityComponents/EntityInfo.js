import React from 'react';
import {CardText} from 'reactstrap';

export const EntityInfo = (props) => {

    let information = props.info;
    let children = [];
    let keys = Object.keys(information);
    // debugger;
    for (let i = 0; i < Object.values(keys).length; i++) {
        children.push(<span key={keys[i]}><span dangerouslySetInnerHTML={{__html: keys[i]}}/>: <strong><span
            dangerouslySetInnerHTML={{__html: information[keys[i]]}}/></strong> <br/> </span>)
    }
    return (
        <CardText className={"lead"}>
            {children}
        </CardText>
    )
};
