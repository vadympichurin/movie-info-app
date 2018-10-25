import axios from 'axios';

const addWishlist = (wish) => ({
    type: 'ADD_WISHLIST',
    wish,
});

function fetchWishlist(event) {
    let id = event.target.dataset.movieid;
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=170b9b9397b0574b7d603cba918ea1f4&language=ru-rus`)
}

export const wishlistAsync = (event) => dispatch => {
    fetchWishlist(event)
        .then(info => {
            let result = JSON.parse(localStorage.getItem('wishList'));
            if(result) {
                result.map(el => el.id).includes(info.data.id) ? null : result.push(info.data);
            } else {
                result=[];
                result.push(info.data)
            }
            localStorage.setItem('wishList', JSON.stringify(result));
            dispatch(addWishlist(result))
        })
        .catch(err => console.log(err))
};

export const delWishlist = (event) => ({
    type: 'DEL_WISHLIST',
    id: event.target.dataset.movieid,
});

export const wishlistDidMount = () => ({
    type: 'WISHLIST_DID_MOUNT',
});