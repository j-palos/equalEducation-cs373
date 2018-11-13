import React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {withStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
// import MultipleSelect from "./MultipleSelectButton";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import Input from "@material-ui/core/Input/Input";
import Chip from "@material-ui/core/Chip/Chip";
import {stateFilter, states_hash} from "../../constants/apiConstants";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import FormControl from "@material-ui/core/FormControl/FormControl";

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function SearchAppBar(props) {
    const {classes} = props;
    let update = props.update;
    debugger;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                        Filter By ...
                    </Typography>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="select-multiple-checkbox">State</InputLabel>
                        <Select
                            multiple
                            value={props.name}
                            onChange={(e) => update(e.target.value)}
                            input={<Input id="select-multiple-checkbox"/>}
                            renderValue={selected => (
                                <div className={classes.chips}>
                                    {selected.map(value => (
                                        <Chip key={value} label={states_hash[value]} className={classes.chip}/>
                                    ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                        >
                            {stateFilter.map(name => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={props.name.indexOf(name) > -1}/>
                                    <ListItemText primary={name}/>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <div className={classes.grow}/>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(SearchAppBar);
