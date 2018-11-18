import React from 'react';
import {CardText} from 'reactstrap';
import TextWrapper from "../Search/TextWrapper";

export const EntityInfo = (props) => {

    let information = props.info;
    let children = [];
    let keys = Object.keys(information);
    let x = String(keys);
    debugger;
    // debugger;
    for (let i = 0; i < Object.values(keys).length; i++) {
        children.push(<span
            key={keys[i]}><TextWrapper>{keys[i] + ':'}</TextWrapper><strong> <TextWrapper>{information[keys[i]]}</TextWrapper></strong> <br/> </span>)
    }
    return (
        <CardText className={"lead"}>
            {children}
        </CardText>
    )
};
