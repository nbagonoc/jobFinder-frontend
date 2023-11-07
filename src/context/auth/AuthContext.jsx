import { PropTypes } from 'prop-types'
import { createContext, useReducer } from 'react'
import AuthReducer from './AuthReducer'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        user: null,
    })

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
