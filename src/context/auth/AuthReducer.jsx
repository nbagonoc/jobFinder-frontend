const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                alert: action.payload.alert,
                errors: action.payload.errors,
            }
        case 'LOGIN':
            return {
                user: action.payload.token,
                alert: action.payload.alert,
                errors: action.payload.errors,
            }
        case 'LOGOUT':
            return {
                user: null,
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
