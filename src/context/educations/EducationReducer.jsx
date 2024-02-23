const EducationReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_EDUCATION':
            return {
                ...state,
                alert: action.payload.alert,
                errors: action.payload.errors,

        }
        case 'UPDATE_EDUCATION':
            return {
                ...state,
                alert: action.payload.alert,
                errors: action.payload.errors,
            }
        case 'SET_EDUCATIONS':
            return {
                ...state,
                educations: action.payload.educations,
            }
        case 'SET_EDUCATION':
            return {
                ...state,
                education: action.payload.education,
            }
        case 'DELETE_EDUCATION':
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

export default EducationReducer
