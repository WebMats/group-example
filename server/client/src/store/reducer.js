

const initialState = {
    groups: []
}

export default (state = initialState, action) => {
    switch (action.key) {
        case 'something':
            return state;
        default:
            return state;
    }
}