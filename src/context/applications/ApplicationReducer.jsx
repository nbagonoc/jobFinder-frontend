const ApplicationReducer = (state, action) => {
    switch (action.type) {
        case 'SET_APPLICATIONS':
            return {
                ...state,
                applications: action.payload.applications,
            }
        case 'SET_APPLICANTS':
            return {
                ...state,
                applicants: action.payload.applicants,
            }
        default:
            return state
    }
}

export default ApplicationReducer
