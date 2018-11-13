import React from 'react';
import {Container, Jumbotron} from 'reactstrap';
import './Entity.css'

export const EntityName = (props) => {
    return (
        <Jumbotron fluid>
            <Container fluid style={{}}>
                <h1 className={'display-3 text-center'}>{props.title}</h1>
            </Container>
        </Jumbotron>
    )
};
