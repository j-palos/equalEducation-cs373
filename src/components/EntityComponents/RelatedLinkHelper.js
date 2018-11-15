import React from 'react';
import {Link} from 'react-router-dom';


class RelatedLinkHelper extends React.PureComponent {

    render() {
        const url = this.props.to;
        const id = this.props.id;
        // debugger;
        return (
            <Link to={`/${url}/${id}`}>
                {this.props.children}
            </Link>
        )
    }
}

export default RelatedLinkHelper;