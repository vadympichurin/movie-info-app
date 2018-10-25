import axios from 'axios';
import {inputClear} from "./inputAction";

const searchAction = (data) => ({
    type: 'SEARCH_MOVIE',
    data,
});


function fetchSearch(filmTitle) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=170b9b9397b0574b7d603cba918ea1f4&language=ru-RUS&query=${filmTitle}&page=1&include_adult=true`)
}

export const searchAsync = (filmTitle) => dispatch => {
    fetchSearch(filmTitle)
        .then(result => dispatch(searchAction(result.data.results)))
        .catch(err => console.log(err))
};

export const searchClear = () => ({
    type: 'SEARCH_CLEAR'
});