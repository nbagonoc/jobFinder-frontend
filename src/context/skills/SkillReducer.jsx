const SkillReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_SKILL':
            return {
                ...state,
                alert: action.payload.alert,
                errors: action.payload.errors,

        }
        case 'UPDATE_SKILL': {
            // Find the index of the skill
            const updatedIndex = state.skills.findIndex(skill => skill._id === action.payload.updatedSkill._id)
            // If the skill is found, update it; otherwise, keep the original array
            const updatedSkills = updatedIndex !== -1 ? [
                ...state.skills.slice(0, updatedIndex),
                action.payload.updatedSkill,
                ...state.skills.slice(updatedIndex + 1),
            ] : state.skills

            return {
                ...state,
                alert: action.payload.alert,
                errors: action.payload.errors,
                skills: updatedSkills,
            }
        }
        case 'SET_SKILLS':
            return {
                ...state,
                skills: action.payload.skills,
            }
        case 'SET_SKILL':
            return {
                ...state,
                skill: action.payload.skill,
            }
        case 'DELETE_SKILL': {
            const updatedSkills = state.skills.filter(skill => skill._id !== action.payload.deletedSkillId)
            return {
                ...state,
                alert: action.payload.alert,
                skills: updatedSkills,
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

export default SkillReducer
