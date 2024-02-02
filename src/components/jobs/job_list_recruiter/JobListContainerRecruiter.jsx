import axios from 'axios'
import { useEffect } from 'react'

import { jobsAPI } from '../../../API'
import { useJobContext } from '../../../hooks/useJobContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

import JobListColumnTitle from './JobListColumnTitle'
import JobListDetails from './JobListDetails'
import JobListFilter from './JobListFilter'
import Default from '../../partials/layouts/Default'

const JobListContainerRecruiter = () => {
    const { jobsOwned, dispatch } = useJobContext()
    const { token } = useAuthContext()

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getjobs = async () => {
            try {
                const response = await axios.get(`${jobsAPI}/owned`, {
                    headers,
                })
                const jobs = response.data
                dispatch({ type: 'SET_JOBS_OWNED', payload: { jobs } })
            } catch (err) {
                console.log(err) //just log error. No need to show to user
            }
        }
        getjobs()
    }, [dispatch, token])

    return (
        <Default>
            <JobListFilter />
            <JobListColumnTitle/>
            <div className='row'>
                {jobsOwned && jobsOwned.length >= 1 ? (
                    jobsOwned.map((job) => (
                        <JobListDetails job={job} key={job._id} />
                    ))
                ) : (
                    <div colSpan='4' className='text-center'>
                        No jobs found...
                    </div>
                )}
            </div>
        </Default>
    )
}

export default JobListContainerRecruiter
