export default function showChat(state = false, action) {
    switch (action.type) {
        case 'SHOW_CHAT':
            return !state;
        default:
            return state;
    }
}

