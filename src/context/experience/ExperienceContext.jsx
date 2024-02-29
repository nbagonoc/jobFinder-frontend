import { PropTypes } from 'prop-types'
import { createContext, useReducer } from 'react'
import ExperienceReducer from './ExperienceReducer'

export const ExperienceContext = createContext()

export const ExperienceContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ExperienceReducer, {
        experiences: [],
        experience: [],
        alert: {},
        errors: [],
    })
    
    return (
        <ExperienceContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ExperienceContext.Provider>
    )
}

ExperienceContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
