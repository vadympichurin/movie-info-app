export default function getFavorite(state = [], action) {
    switch (action.type) {

        case 'ADD_FAVORITE':
            return [...action.favorite];

        case 'DEL_FAVORITE':
            let result = JSON.parse(localStorage.getItem('favorite'));
            result = result.filter(el => el.id !== +action.id);
            localStorage.setItem('favorite', JSON.stringify(result));
            return result;

        case 'FAVORITE_DID_MOUNT':
            let info = JSON.parse(localStorage.getItem('favorite'));
            return info;

        default:
            return state;
    }
}

