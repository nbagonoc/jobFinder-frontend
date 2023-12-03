const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_JOB':
            console.log(action.payload.alert)
            return {
                ...state,
                alert: action.payload.alert,
                errors: action.payload.errors,
            }
        case 'EDIT_JOB':
            return {
                ...state,
                // job: action.payload,
                alert: action.payload.alert,
                errors: action.payload.errors,
            }
        case 'SET_JOB':
            return {
                ...state,
                job: action.payload.job,
                // alert: action.payload.alert,
            }
        case 'DELETE_JOB':
            console.log(action.payload.alert) //this has value
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
        case 'SET_JOBS_APPLIED':
            return {
                jobsApplied: action.payload.jobs,
                alert: action.payload.alert,
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
