import { jwtDecode } from 'jwt-decode'
import { PropTypes } from 'prop-types'
import { createContext, useReducer, useEffect } from 'react'

import AuthReducer from './AuthReducer'
export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        user: null,
        token: null,
        alert: {},
        errors: [],
    })

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const decodedToken = jwtDecode(token)
            const user = { _id: decodedToken._id, name: decodedToken.firstName, role: decodedToken.role }
            dispatch({
                type: 'LOGIN',
                payload: { user, token },
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
