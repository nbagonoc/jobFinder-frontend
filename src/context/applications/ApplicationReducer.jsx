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
        case 'UPDATE_APPLICATION_STATUS':
            return {
                ...state,
                alert: action.payload.alert,
            }
        case 'CLEANER':
            return {
                ...state,
                alert: {}
            }
        default:
            return state
    }
}

export default ApplicationReducer
