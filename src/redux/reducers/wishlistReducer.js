export default function getWishlist(state = [], action) {
    switch (action.type){
        case 'ADD_WISHLIST':
            return [...action.wish];

        case 'DEL_WISHLIST':
            let res = JSON.parse(localStorage.getItem('wishList'));
            res = res.filter(el => el.id !== +action.id);
            localStorage.setItem('wishList', JSON.stringify(res));
            return res;

        case 'WISHLIST_DID_MOUNT':
            let info = JSON.parse(localStorage.getItem('wishList'));
            return info;

        default:
            return state;
    }
}

