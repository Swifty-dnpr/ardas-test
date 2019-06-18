export const SEARCH_FILMS = 'SEARCH_FILMS';
export const SEARCH_FILMS_SUCCESS = 'SEARCH_FILMS_SUCCESS';
export const SEARCH_FILMS_FAIL = 'SEARCH_FILMS_FAIL';
export const SET_PAGE_OFFSET = 'SET_PAGE_OFFSET';

export function searchFilms(payload) {
    return { type: SEARCH_FILMS, payload };
};

export function searchFilmsSuccess(films) {
    return { type: SEARCH_FILMS_SUCCESS, films };
};

export function searchFilmsFail(error) {
    return { type: SEARCH_FILMS_FAIL, error };
};

export function setPageOffset(pageOffset) {
    return { type: SET_PAGE_OFFSET, pageOffset };
};