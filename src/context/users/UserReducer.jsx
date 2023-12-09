const UserReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            return {
                ...state,
                profile: action.payload.profile,
            }
        case 'SET_APPLICANT':
            return {
                ...state,
                applicant: action.payload.applicant,
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
