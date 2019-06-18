import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        width: '60vw'
    },
    poster: {
        width: '10vw'
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
});

export default function MovieCard(props) {
    const { id, title, overview, poster_path } = props.film.toObject();

    const classes = useStyles();

    return (
        <div className={classes.cardContainer}>
            <Card className={classes.card}>
                <CardMedia className>
                <img className={classes.poster} 
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt="Film Poster"/>
                </CardMedia>
                <CardContent>
                <Typography variant="p">
                    { title }
                </Typography>
                <Typography variant="subtitle2">
                    { overview }
                </Typography>
                <Link to={`/details/${id}`}>
                    More Info
                </Link> 
                </CardContent>
            </Card>
        </div>
    );
};