import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useCallback } from 'react'

import { jobsAPI } from '../../../API'
import AlertMessage from '../../partials/AlertMessage'
import { useJobContext } from '../../../hooks/useJobContext'
import ViewJobDetails from './JobViewDetails'

const JobViewContainer = () => {
    const { _id } = useParams()
    const { job, dispatch } = useJobContext()

    // reset states when component unmounts
    const resetState = useCallback(() => {
        dispatch({ type: 'SET_JOB', payload: { job: {}, alert: {} } })
    }, [dispatch])

    useEffect(() => {
        const getjob = async () => {
            try {
                const response = await axios.get(`${jobsAPI}/${_id}`)
                const job = response.data
                dispatch({ type: 'SET_JOB', payload: { job } })
            } catch (err) {
                let message = 'Something went wrong!'
                if (err && err.response) {
                    message = err.response.data.errors.message
                }
                dispatch({
                    type: 'SET_JOB',
                    payload: {
                        alert: {
                            message,
                            success: false,
                        },
                    },
                })
            }
        }
        getjob()
        return resetState // reset states when component unmounts
    }, [_id, dispatch, resetState])

    return (
        <div className='card'>
            <div className='card-header'>
                <div className='row'>
                    <div className='col-6'>
                        {job && <h3 className='mb-0 fw-bold'>{job.title}</h3>}
                        <div />
                    </div>
                    <div className='col-6'>
                        <Link
                            to='/jobs'
                            className='btn btn-secondary float-end'
                        >
                            Search other jobs
                        </Link>
                    </div>
                </div>
            </div>
            <div className='card-body'>
                <AlertMessage />
                {job && <ViewJobDetails job={job} />}
            </div>
        </div>
    )
}

export default JobViewContainer
