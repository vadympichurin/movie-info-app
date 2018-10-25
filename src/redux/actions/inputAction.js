export const inputAction = (event) => ({
    type: 'CHANGE_INPUT',
    value: event.target.value,
});


export const inputClear = () => ({
    type: 'INPUT_CLEAR'
});

