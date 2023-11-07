const AuthReducer = (state, action) => {
    switch (action.type) {
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
        default:
            return state
    }
}

export default AuthReducer
