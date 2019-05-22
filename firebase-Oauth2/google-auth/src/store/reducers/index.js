

const initialState = {
    user: {},
    userGroups: [],
    error: null,
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'Something':
            return state
        default:
            return state;
    }
}