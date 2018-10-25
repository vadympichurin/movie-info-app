import axios from 'axios';

const favoriteAction = (favorite) => ({
    type: 'ADD_FAVORITE',
    favorite,
});

function fetchFavorite(event) {
    let id = event.target.dataset.movieid;
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=170b9b9397b0574b7d603cba918ea1f4&language=ru-rus`)
}

export const favoriteAsync = (event) => dispatch => {
    fetchFavorite(event)
        .then(response => {
            let result = JSON.parse(localStorage.getItem('favorite'));
            if(result) {
                result.map(el => el.id).includes(response.data.id) ? null : result.push(response.data);
            } else {
                result=[];
                result.push(response.data)
            }
            localStorage.setItem('favorite', JSON.stringify(result));
            dispatch(favoriteAction(result))
        }
    )
    .catch(error => console.log(error))
};

export const delFavorite = (event) => ({
    type: 'DEL_FAVORITE',
    id: event.target.dataset.movieid,
});

export const favoriteDidMount = () => ({
    type: 'FAVORITE_DID_MOUNT',
});
