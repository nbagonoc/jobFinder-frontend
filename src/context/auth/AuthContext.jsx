// import { jwtDecode } from 'jwt-decode'
import { PropTypes } from 'prop-types'
import { createContext, useReducer, useEffect } from 'react'

import AuthReducer from './AuthReducer'
export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        user: null,
        email: null,
        alert: {},
        errors: [],
    })

    useEffect(() => {
        const token = localStorage.getItem('user')
        // const decodedToken = jwtDecode(token)
        // const email = decodedToken.role

        if (token) {
            dispatch({
                type: 'LOGIN',
                payload: { token},
                // payload: { token, email },
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
