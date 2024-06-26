const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_JOB':
            return {
                ...state,
                alert: action.payload.alert,
                errors: action.payload.errors,
            }
        case 'APPLY_JOB':
            return {
                ...state,
                job: action.payload.job,
                alert: action.payload.alert,
            }
        case 'EDIT_JOB':
            return {
                ...state,
                alert: action.payload.alert,
                errors: action.payload.errors,
            }
        case 'SET_JOB':
            return {
                ...state,
                job: action.payload.job,
            }
        case 'SET_JOB_APPLICANTS':
            return {
                ...state,
                jobApplicants: action.payload.jobApplicants,
            }
        case 'DELETE_JOB':
            return {
                ...state,
                alert: action.payload.alert,
            }
        case 'SET_JOBS':
            return {
                ...state,
                jobs: action.payload.jobs,
            }
        case 'SET_JOBS_OWNED':
            return {
                ...state,
                jobsOwned: action.payload.jobs,
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

export default AuthReducer
