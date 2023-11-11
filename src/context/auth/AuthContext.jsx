import { PropTypes } from 'prop-types'
import { createContext, useReducer, useEffect } from 'react'
import AuthReducer from './AuthReducer'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        user: null,
    })

    useEffect(() => {
        const token = localStorage.getItem('user')
        if (token) {
            dispatch({
                type: 'LOGIN',
                payload: { token },
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
