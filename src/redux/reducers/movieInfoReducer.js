export default function getMovieInfo(state = {}, action) {
    switch (action.type){
        case 'MOVIE_INFO':
            return action.fullInfo;
        default:
            return state;
    }
}

