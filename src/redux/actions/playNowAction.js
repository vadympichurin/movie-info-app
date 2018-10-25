import axios from 'axios';


const playNowAction = (data) => ({
    type: 'PLAY_NOW',
    data,
});

function fetchPlayNow() {
    return axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=170b9b9397b0574b7d603cba918ea1f4&language=ru-RUS&page=1&region=UA")
}

export const playNowAsync = () => dispatch => {
    fetchPlayNow()
        .then(result => dispatch(playNowAction(result.data.results)))
        .catch(error => console.log(error))
};