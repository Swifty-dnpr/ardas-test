import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainPage from './routes/main-page';
import FilmDetailsPage from './routes/film-details-page';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route
                exact
                path="/"
                component={ MainPage }
            />
            <Route 
                path="/details/:id"
                component={ FilmDetailsPage }
            />
        </Router>
    </Provider>
);

export default Root;