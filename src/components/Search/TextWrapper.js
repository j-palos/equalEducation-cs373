import Highlighter from "react-highlight-words";
import React from 'react';
import connect from "react-redux/es/connect/connect";


const mapStateToProps = state => {
    return {searchTerms: state.searchTerms};
};

class CxtWrapper extends React.PureComponent {
    render() {
        return (
            <Highlighter
                highlightClassName="mark"
                searchWords={this.props.searchTerms}
                autoEscape={true}
                textToHighlight={String(this.props.children)}
            />
        )
    }
}

const TextWrapper = connect(mapStateToProps)(CxtWrapper);
export default TextWrapper;
