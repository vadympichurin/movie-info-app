export default function getSearchMovie(state = [], action) {
    switch (action.type) {
        case 'SEARCH_MOVIE':
            return [...action.data];
        case 'SEARCH_CLEAR':
            return [];
        default:
            return state;
    }
}


