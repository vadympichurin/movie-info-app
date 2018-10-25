export default function getInput(state = '', action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return action.value;
        case 'INPUT_CLEAR':
            return '';
        default:
            return state;
    }
}

