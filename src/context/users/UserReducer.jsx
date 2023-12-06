const UserReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            return {
                ...state,
                profile: action.payload.profile,
            }
        case 'CLEANER':
            return {
                ...state,
                alert: {},
                errors: [],
            }
        default:
            return state
    }
}

export default UserReducer
