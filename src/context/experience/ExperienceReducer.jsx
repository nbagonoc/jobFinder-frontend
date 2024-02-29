const ExperienceReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_EXPERIENCE':
            return {
                ...state,
                alert: action.payload.alert,
                errors: action.payload.errors,

        }
        case 'UPDATE_EXPERIENCE': {
            // Find the index of the experience
            const updatedIndex = state.experiences.findIndex(exp => exp._id === action.payload.updatedExperience._id)
            // If the experience is found, update it; otherwise, keep the original array
            const updatedExperiences = updatedIndex !== -1 ? [
                ...state.experiences.slice(0, updatedIndex),
                action.payload.updatedExperience,
                ...state.experiences.slice(updatedIndex + 1),
            ] : state.experiences

            return {
                ...state,
                alert: action.payload.alert,
                errors: action.payload.errors,
                experiences: updatedExperiences,
            }
        }
        case 'SET_EXPERIENCES':
            return {
                ...state,
                experiences: action.payload.experiences,
            }
        case 'SET_EXPERIENCE':
            return {
                ...state,
                experience: action.payload.experience,
            }
        case 'DELETE_EXPERIENCE': {
            const updatedExperiences = state.experiences.filter(exp => exp._id !== action.payload.deletedExperienceId)
            return {
                ...state,
                alert: action.payload.alert,
                experiences: updatedExperiences,
            }
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

export default ExperienceReducer
