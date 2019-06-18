import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField } from '@material-ui/core';

import { searchFilms, setPageOffset } from '../../redux/actions';

const useStyles = makeStyles(theme => ({
    textField: {
        width: '85vw',
        marginLeft: '5vw'
    },
    button: {
        marginTop: '1vh'
    }
}));

export default function SearchBar() {
    const classes = useStyles();
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();

    const handleChange = event => {
        setSearchQuery(event.target.value);
    };
    const handleClick = () => {
        dispatch(searchFilms({searchQuery, page: 1}));
        dispatch(setPageOffset(0));
    };

    return (
        <div>
            <TextField
                id="search-bar"
                label="Search"
                value={searchQuery}
                className={classes.textField}
                onChange={ handleChange }
            />
            <Button variant="contained" 
                    color="primary" 
                    className={classes.button}
                    onClick={ handleClick }>
                Search
            </Button>
        </div>
    );
};