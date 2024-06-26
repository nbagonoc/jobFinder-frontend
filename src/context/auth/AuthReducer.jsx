const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                alert: action.payload.alert,
                errors: action.payload.errors,
            }
        case 'LOGIN':
            return {
                user: action.payload.user,
                token: action.payload.token,
                alert: action.payload.alert,
                errors: action.payload.errors,
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                token: null,
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
