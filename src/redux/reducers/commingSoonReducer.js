export default function getCommingSoon(state = [], action) {
    switch(action.type) {
        case 'COMMING_SOON':
            return [...action.data];
        default:
            return state;
    }
}

