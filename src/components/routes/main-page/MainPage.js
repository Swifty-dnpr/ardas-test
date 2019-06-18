import React, { useEffect } from 'react';

import { useStore } from 'react-redux';

import SearchBar from '../../search-bar';
import Movies from  '../../movies';
import MoviesPagination from '../../movies/movies-pagination';

export default function MainPage() {
    const store = useStore();   

    useEffect(() => {
        console.log(store.getState());
    });

    return (
        <div>
            <SearchBar/>
            <Movies/>
            <MoviesPagination/>
        </div>
    );
};