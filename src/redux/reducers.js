import { SEARCH_FILMS, SEARCH_FILMS_SUCCESS, SEARCH_FILMS_FAIL, SET_PAGE_OFFSET } from './actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    loading: false,
    updating: false,
    films: [],
    searchQuery: "",
    error: "",
    page: 1,
    offset: 0
});

export default function rootReducer(state = initialState, action) {
    switch(action.type){
        case SEARCH_FILMS:
            return state.merge({
                loading: true,
                searchQuery: action.payload.searchQuery,
                page: action.payload.page
            });
        case SEARCH_FILMS_SUCCESS:
            return state.merge({
                films: action.films,
                loading: false
            }); 
        case SEARCH_FILMS_FAIL:
            return state.merge({
                loading: false,
                error: action.error
            });
        case SET_PAGE_OFFSET:
            return state.merge({
                offset: action.pageOffset
            });
        default:
            return state;
    }
}

