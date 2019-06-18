import { takeLatest, call, put } from 'redux-saga/effects';
import { fromJS } from 'immutable';

import sendRequest from '../util/sendRequest';
import { SEARCH_FILMS, searchFilmsSuccess, searchFilmsFail } from './actions';

export const getSearchQuery = (state) => state.get('searchQuery');

export function* watchFetchMovies() {
    yield takeLatest(SEARCH_FILMS, fetchMovies)
};

export function* fetchMovies(action) {
    try {
        const { data } = yield call(sendRequest, action.payload.searchQuery, action.payload.page);
        yield put(searchFilmsSuccess(fromJS(data.results)));
    } catch (error) {
        yield put(searchFilmsFail(error));
    }
};

