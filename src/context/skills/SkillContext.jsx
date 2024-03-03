import { PropTypes } from 'prop-types'
import { createContext, useReducer } from 'react'
import SkillReducer from './SkillReducer'

export const SkillContext = createContext()

export const SkillContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SkillReducer, {
        skills: [],
        skill: [],
        alert: {},
        errors: [],
    })
    
    return (
        <SkillContext.Provider value={{ ...state, dispatch }}>
            {children}
        </SkillContext.Provider>
    )
}

SkillContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
