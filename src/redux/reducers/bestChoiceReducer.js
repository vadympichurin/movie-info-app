export default function getBestChoice(state = [], action) {
    switch(action.type) {
        case 'BEST_CHOICE':
            return [...action.data];
        default:
            return state;
    }
}

