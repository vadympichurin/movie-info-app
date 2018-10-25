import axios from 'axios';

const bestChoiceAction = (data) => ({
    type: 'BEST_CHOICE',
    data,
});

function fetchBestChoice() {
    return axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=170b9b9397b0574b7d603cba918ea1f4&language=ru-Rus&page=1&region=UA")
}

export const bestChoiceAsync = () => dispatch => {
    fetchBestChoice()
        .then(result => dispatch(bestChoiceAction(result.data.results)))
        .catch(err => console.log(err))
};
