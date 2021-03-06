import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowDown from '@material-ui/icons/ArrowDownward'
import ArrowUp from '@material-ui/icons/ArrowUpward';


class SorterButton extends React.PureComponent {

    render() {
        let handleClick = this.props.onClick;
        let image = !this.props.desc ? [<ArrowDown key={'down'}/>] : [<ArrowUp key={'up'}/>];
        return (
            <IconButton color={'inherit'} onClick={(e) => handleClick(e)}>
                {image}
            </IconButton>
        )
    }

}

export default SorterButton;
