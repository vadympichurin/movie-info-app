import axios from 'axios';

const commingSoonAction = (data) => ({
    type: 'COMMING_SOON',
    data: data,
});

function fetchCommingSoon() {
    return axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=170b9b9397b0574b7d603cba918ea1f4&language=ru-RUS&page=1&region=UA\n")
}

export const commingSoonAsync = () => dispatch => {
    fetchCommingSoon()
        .then(result => dispatch(commingSoonAction(result.data.results)))
        .catch(error => console.log(error))
};