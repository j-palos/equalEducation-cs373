import Highlighter from "react-highlight-words";
import React from 'react';
import {SearchContextConsumer} from '../MyNavbar/MyNavbar';


class TextWrapper extends React.Component {


    render() {
        debugger;
        return (
            <SearchContextConsumer>
                {({input}) => (
                    <Highlighter
                        highlightClassName="mark"
                        searchWords={[input]}
                        autoEscape={true}
                        textToHighlight={this.props.text}
                    />
                )}
            </SearchContextConsumer>
        )
    }
}

export default TextWrapper;