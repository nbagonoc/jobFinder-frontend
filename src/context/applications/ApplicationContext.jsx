import { PropTypes } from 'prop-types'
import { createContext, useReducer } from 'react'

import ApplicationReducer from './ApplicationReducer'
export const ApplicationContext = createContext()

export const ApplicationContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ApplicationReducer, {
        applications: [],
        applicants: [],
        alert: {},
        errors: [],
    })
    
    return (
        <ApplicationContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ApplicationContext.Provider>
    )
}

ApplicationContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
