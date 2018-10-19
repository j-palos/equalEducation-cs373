import React from 'react';
import {Table} from 'reactstrap';


function AboutTable(props) {
    let namesArray = props.names;
    return (
        <Table striped>
            <thead>
            <th>Name</th>
            <th>Commits</th>
            <th>Issues</th>
            <th>Unit Tests</th>
            </thead>
            <tbody>
            {namesArray.map((person) => {
                return (
                    <tr>
                        <td>{person.name}</td>
                        <td>{person.commits}</td>
                        <td>{person.issues}</td>
                        <td>{person.unit_test}</td>
                    </tr>
                )
            })}
            </tbody>
        </Table>
    )
}


export default AboutTable