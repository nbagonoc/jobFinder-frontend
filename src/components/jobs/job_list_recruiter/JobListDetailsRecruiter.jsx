import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { jobsAPI } from '../../../API'
import { useJobContext } from '../../../hooks/useJobContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

const JobListDetails = () => {
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
        <div>
            {jobsOwned && jobsOwned.length >= 1 ? (
                jobsOwned.map((job) => (
                    <div className='card mb-3' key={job._id}>
                        <div className='card-body'>
                            <Link
                                to={`/jobs/view/${job._id}`}
                                className='link-primary text-capitalize text-decoration-none'
                            >
                                <h5 className='card-title fw-bold'>
                                    {job.title}
                                </h5>
                            </Link>
                            <p className='text-muted fw-light text-lowercase'>
                                {job.position} | {job.company} | {job.location}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <div colSpan='4' className='text-center'>
                    No jobs found...
                </div>
            )}
        </div>
    )
}

export default JobListDetails
