export default function getPlayNow(state = [], action) {
    switch (action.type) {
        case 'PLAY_NOW':
            return [...action.data];
        default:
            return state;
    }
}

