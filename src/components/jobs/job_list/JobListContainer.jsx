import axios from 'axios'
import { useEffect } from 'react'

import { jobsAPI } from '../../../API'
import { useJobContext } from '../../../hooks/useJobContext'
import JobListDetails from './JobListDetails'
import JobListFilter from './JobListFilter'
import AlertMessage from '../../partials/AlertMessage/AlertMessage'

const JobListContainer = () => {
    const { jobs, dispatch } = useJobContext()

    useEffect(() => {
        const getjobs = async () => {
            try {
                const response = await axios.get(jobsAPI)
                const jobs = response.data
                dispatch({ type: 'SET_JOBS', payload: { jobs } })
            } catch (err) {
                console.log(err) //just log error. No need to show to user
            }
        }
        getjobs()
    }, [dispatch])

    return (
        <div className='container-xxl'>
            <AlertMessage />
            <div className='row'>
                <div className='col-md-5 mb-3'>
                    <JobListFilter />
                </div>
                <div className='col-md-7'>
                    {jobs && jobs.length >= 1 ? (
                        jobs.map(job => <JobListDetails job={job} key={job._id} />)
                    ) : (
                        <div colSpan='4' className='text-center'>
                            No jobs found...
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default JobListContainer
