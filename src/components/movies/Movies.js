import React from 'react';

import { useSelector } from 'react-redux';

import MovieCard from './movie-card/MovieCard';

export default function Movies() {
    const movies = useSelector(state => state.get('films'));

    return (
        <div className="movies">
            { movies.map((movie) => <MovieCard key={movie.get('id')} film={movie}/> )}
        </div>
    );
} ;