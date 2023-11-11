const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                // user: action.payload.user,
                alert: action.payload.alert,
                errors: action.payload.errors,
            }
        case 'LOGIN':
            return {
                user: action.payload.user,
                alert: action.payload.alert,
            }
        case 'LOGOUT':
            return {
                user: null,
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
