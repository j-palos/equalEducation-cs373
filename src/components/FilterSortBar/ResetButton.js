import React from 'react';
import IconButton from "@material-ui/core/IconButton/IconButton";


class SorterButton extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        let handleClick = this.props.onClick;
        // let image = !this.props.desc ? [<ArrowDown key={'down'}/>] : [<ArrowUp key={'up'}/>];
        // debugger;
        return (
            <IconButton color={'inherit'} onClick={(e) => handleClick(e)}>
                {this.props.children}
            </IconButton>
        )
    }

}

export default SorterButton;
