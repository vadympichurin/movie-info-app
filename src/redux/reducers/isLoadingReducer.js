export default function isLoading(state = true, action) {
    switch (action.type){
        case 'LOADING_TRUE':
            return false;
        case 'LOADING_START' :
            return true;
        default:
            return state;
    }
}

