import axios from 'axios';

const MOVIEDB_URL = 'https://api.themoviedb.org/3';

const SEARCH_MOVIE_QUERY = '/search/movie'

const API_KEY = '83c40aef88d30a896c4316d109d48660';

export default function sendRequest(searchQuery, page) {
    searchQuery = encodeURI(searchQuery);
    return axios.get(
        `${MOVIEDB_URL}${SEARCH_MOVIE_QUERY}?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
        );
}