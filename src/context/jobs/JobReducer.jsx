const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'SET_JOB':
            return {
                job: action.payload.job,
            }
        case 'SET_JOBS':
            return {
                jobs: action.payload.jobs,
            }
        default:
            return state
    }
}

export default AuthReducer
