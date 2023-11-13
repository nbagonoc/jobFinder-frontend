import { JobContext } from '../context/jobs/JobContext'
import { useContext } from 'react'

export const useJobContext = () => {
    const context = useContext(JobContext)

    if (!context) {
        throw new Error('useJobContext must be used within a useJobContextProvider')
    }

    return context
}
