import { AuthContext } from '../context/AuthContext'
import { JobContext } from '../context/JobContext'
import { useContext } from 'react'

export const useGlobalContext = () => {
    const auth = useContext(AuthContext)
    const job = useContext(JobContext)

    if (!auth || !job) {
        throw new Error('useGlobalContext must be used within a component wrapped with AuthContext and JobContext')
    }

    return { auth, job }
}