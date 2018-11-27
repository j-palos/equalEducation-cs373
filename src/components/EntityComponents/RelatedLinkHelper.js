import React from 'react';
import {Link} from 'react-router-dom';
import TextWrapper from "../Search/TextWrapper";


class RelatedLinkHelper extends React.PureComponent {

    render() {
        const url = this.props.to;
        const id = this.props.id;
        return (
            <Link to={`/${url}/${id}`}>
                <TextWrapper>{this.props.children}</TextWrapper>
            </Link>
        )
    }
}

export default RelatedLinkHelper;