import { PropTypes } from 'prop-types'
import { createContext, useReducer } from 'react'
import JobReducer from './JobReducer'

export const JobContext = createContext()

export const JobContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(JobReducer, {
        jobs: [],
        // jobApplicants: [],
        jobsOwned: [],
        job: {},
        alert: {},
        errors: [],
    })

    return (
        <JobContext.Provider value={{ ...state, dispatch }}>
            {children}
        </JobContext.Provider>
    )
}

JobContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
