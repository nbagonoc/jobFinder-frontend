import { PropTypes } from 'prop-types'
import { createContext, useReducer } from 'react'
import EducationReducer from './EducationReducer'

export const EducationContext = createContext()

export const EducationContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(EducationReducer, {
        educations: [],
        education: [],
        alert: {},
        errors: [],
    })
    
    return (
        <EducationContext.Provider value={{ ...state, dispatch }}>
            {children}
        </EducationContext.Provider>
    )
}

EducationContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
