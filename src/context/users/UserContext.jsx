import { PropTypes } from 'prop-types'
import { createContext, useReducer} from 'react'
import UserReducer from './UserReducer'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, {
        applicant: {},
        profile: {},
        // applications: [], to-do. for applicants to view their applied jobs
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
