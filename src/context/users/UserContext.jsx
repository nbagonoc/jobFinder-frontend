import { PropTypes } from 'prop-types'
import { createContext, useReducer} from 'react'
import UserReducer from './UserReducer'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, {
        applicant: null,
        applicants: null,
        profile: null,
        alert: {},
        errors: [],
    })

    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
