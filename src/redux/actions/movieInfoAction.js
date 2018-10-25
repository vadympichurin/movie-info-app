import axios from 'axios';
import { isLoadingAction, isLoadingStartAction } from './isLoadingAction';
import { inputClear } from "./inputAction";

const movieInfoAction = (fullInfo) => ({
    type: 'MOVIE_INFO',
    fullInfo,
});

function fetchMovieInfo(idurl) {
    return Promise.all([axios.get(`https://api.themoviedb.org/3/movie/${idurl}?api_key=170b9b9397b0574b7d603cba918ea1f4&language=ru_RUS`), axios.get(`https://api.themoviedb.org/3/movie/${idurl}/videos?api_key=170b9b9397b0574b7d603cba918ea1f4&language=ru-RUS`), axios.get(`https://api.themoviedb.org/3/movie/${idurl}/similar?api_key=170b9b9397b0574b7d603cba918ea1f4&language=ru-Rus&page=1`)])
}

export const movieInfoAsync = (idurl) => dispatch => {
    dispatch(isLoadingStartAction());
    fetchMovieInfo(idurl)
        .then(data => {
                let [info, video, similar] = data;
                let description = info.data;
                let trailers = video.data.results;
                let recommendation = similar.data.results;
                let fullInfo = {
                    ...description,
                    trailers: trailers,
                    recommendation: recommendation,
                }
                dispatch(movieInfoAction(fullInfo))
            }
        )
        .then(() => dispatch(isLoadingAction()))
        .then(() => dispatch(inputClear()))
        .catch(err => console.log(err))
};

