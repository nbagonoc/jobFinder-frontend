const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_JOB':
            return {
                alert: action.payload.alert,
                errors: action.payload.errors,
            }
        case 'EDIT_JOB':
            return {
                job: action.payload,
                alert: action.payload.alert,
                errors: action.payload.errors,
            }
        case 'SET_JOB':
            return {
                job: action.payload.job,
                alert: action.payload.alert,
            }
        case 'SET_JOBS':
            return {
                jobs: action.payload.jobs,
                alert: action.payload.alert,
            }
        case 'CLEANER':
            return {
                ...state,
                alert: null,
                errors: null,
            }
        default:
            return state
    }
}

export default AuthReducer
