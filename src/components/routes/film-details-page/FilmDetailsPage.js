import React from 'react';

import { useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    card: {
        width: '80vw'
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, 	#2e5090 0%,	#6699CC 50%,#3457D5 100%)'
    }
});

export default function FilmDetailsPage({ match }) {
    const classes = useStyles();

    const film = useSelector(state => {
        const films = state.getIn(['films']);
        return films.find((film) => {
            return film.getIn(['id']).toString() === match.params.id
        });
    });

    return (
        <div className={classes.cardContainer}>
            {film && <Card className={classes.card}>
                <CardContent >
                <Typography variant="h5">{ film.getIn(['title']) }</Typography>
                <Typography variant="subtitle1">{ film.getIn(['overview']) }</Typography>
                </CardContent>
            </Card>}
        </div>
    );
};